import React, { useEffect, useState } from 'react';
import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/astor-jackson/trips"

const ListTrips = () => {
    const [tripList, setTripList] = useState ([])

    const getTripList = async () => {

        try {
            const response = await axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips")
            setTripList(response.data.trips)
            console.log(response)
        }
        catch (error) {
            console.log(error.response)
        }
        console.log(tripList)
    }
    useEffect(() =>{
        getTripList() }, [])
    
    // const showTripList = () => {
    //     tripList.map(item) {
    //         return (

    //         )
    //     }
    // }
    return(
        <div>
            tripList
        </div>
    )
}
export default ListTrips