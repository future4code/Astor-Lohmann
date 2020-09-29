import React, { useState } from 'react';
import TinderCard from './TinderCard.js/TinderProfile'
import Request, { getProfileToChoose } from '../services/Requests'
import axios from 'axios'

function Home() {
const [currentProfile, setCurrentProfile] = useState([]);


const getProfileToChoose = () => {
    const request = axios
    .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:astor/person')
    request
    .then((response) => {
      setCurrentProfile(response.profile.data)
      console.log(response)
    })
    .catch(error => {
      console.log(error)
  })
  
};
console.log(currentProfile)

return (
  <div>
    <div>
      <img src={currentProfile.photo}/>
    </div>
    <div>
      <p>{currentProfile.name}</p>
      <p>{currentProfile.age}</p>
      <p>{currentProfile.bio}</p>
    </div>
    
  </div>
)
}

export default Home;