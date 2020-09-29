import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/astor-jackson" 

const DetailTrips = () => {
    const history = useHistory();


    const getTripDetail = () => {
      axios
        .get(`${baseUrl}/trip/F4W4De1vGUP4HC2ZGztH`, {
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

    useEffect(() => {
      const token = window.localStorage.getItem("token");
  
      if (token) {
        getTripDetail();
      } else {
        history.push("/");
      }
    }, [history]);
  

  
    return <div>TripDetailPage</div>;
  }
  
  export default DetailTrips;