import axios from "axios";
import React, { useState } from "react";

export const api = axios.create({
    baseURL: "http://peopletest.leadsoft.inf.br/api/v1"
});

export const createSession = async (username, password) => {


      const response = api.post("/Auth/LogIn", {username, password})
        .then(function (event) {
            return event
        })
        .catch(function (error) {
            return "error"
        });

        return response
    
};

// export const getUsers = async() => {

//     var Rectoken = localStorage.getItem("token");

//     var token = JSON.parse(Rectoken);

//     const instance = axios.create({
//     baseURL: 'http://peopletest.leadsoft.inf.br/api/v1',
//     timeout: 1000,
//     headers: {  
//         'accept' : 'application/problem+json',
//         'Authorization' : token
//     }
//     });
//     // 'Authorization' : 'wBrDIKbpreqVlEr36na8XVySlDldv92vku+I3IF3kwIwSAV3t1jpMnUlyZgmcFZU'
//     return instance.get("/People");
// }