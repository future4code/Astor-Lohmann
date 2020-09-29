import React from 'react';
import { useHistory } from 'react-router-dom';

const CreateTrips = () => {

    const { form, onChange, resetState } = useForm({
        id: "",
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
    
        onChange(name, value);
      };
    
      const handleSubmittion = (event) => {
        event.preventDefault();
    
        resetState();
      };


      const CreateTrip = () =>{
          const body = {
            name: "form.name",
            planet: "form.planet",
            date: "form.date",
            description: "form.description",
            durationInDays: "form.duration"
          }
      }
    return(
        <div>
        <form onSubmit={handleSubmittion}>
        <p>Insira o seu nome</p>
        <input
          value={form.name}
          name="name"
          onChange={handleInputChange}
          type="text"
          pattern="[A-Za-z]{3,}"
          title="No minimo 3 letras"
          required
        />
        <p>Insira o planeta</p>
        <input
          value={form.idade}
          name="idade"
          onChange={handleInputChange}
          min="18"
          type="number"
          required
        />
        <p>Insira a data</p>
        <input
          value={form.email}
          name="email"
          onChange={handleInputChange}
          type="email"
          required
        />
        <p>Insira a descrição</p>
        <input
          value={form.email}
          name="email"
          onChange={handleInputChange}
          type="email"
          required
        />
        <p>Insira a duração da viagem</p>
        <input
          value={form.email}
          name="email"
          onChange={handleInputChange}
          type="number"
          required
        />
        <button>Enviar</button>
      </form>
        </div>
        
    )
}
export default CreateTrips