import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/astor-jackson/trip/" 

const DetailTrips = () => {
    const history = useHistory();

    useEffect(() => {
      const token = window.localStorage.getItem("token");
  
      if (token) {
        getTripDetail();
      } else {
        history.push("/");
      }
    }, [history]);
  
    const getTripDetail = () => {
      axios
        .get(`${baseUrl}/trip/aK1H3e8bYjl5hIgwYgpv`, {
          headers: {
            auth: localStorage.getItem("token")
          }
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
  
    // uso do hook de proteção de páginas
    // useProtectPage(getTripDetail)
  
    return <div>TripDetailPage</div>;
  }
  
  export default DetailTrips;