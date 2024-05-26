import React, { useState } from "react"; 
import axios from "axios";
import {sha256} from 'js-sha256'


 async function postAxiosSignIn(props)  { 
   

     
    // console.log(props,'axios dataaa')
    let sendData = enCode(props)
    console.log(sendData)
    if(sendData){
        try{

            let response = await axios.post('http://localhost:3001/api/login', sendData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            
            localStorage.setItem('token', response.data.Token)
            const token = localStorage.getItem('token');
            return 'ok'
            // console.log(token,'tokennn')
        }catch(er){
            console.error
        }
           
       
    }
}


function enCode(data){
    console.log(data)
    const {email,
    password,
    } = data
    console.log(
        email,
        password
        )

    const hashEmail = sha256(email)
    const hashPassword = sha256(password)

    return {email:hashEmail, password:hashPassword}


}

export default postAxiosSignIn;
