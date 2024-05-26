import React, { useState } from "react"; 
import axios from "axios";
import {sha256} from 'js-sha256'


async function PostAxio(props)  { 
   

    const { data } = props; // Destructure props to extract data
    console.log(data,'in axios')
    let sendData = enCode(data)
    console.log(sendData)
    if(sendData){
       await axios.post('http://localhost:3001/api/user', sendData, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            console.log('Response:', response.data);
            return 'ok'
        }).catch((error) => {
            return error
        }).finally(()=>{
            return "Test"
        })
        return 'test'
    }
}


function enCode(data){
    console.log(data)
    const {email,
    password,
    name,
    lastName} = data
    console.log(
        name,
        lastName,
        email,
        password
        )

    const hashEmail = sha256(email)
    const hashPassword = sha256(password)

    return {name:name, surname:lastName, mail:hashEmail, password:hashPassword}


}

export default PostAxio;
