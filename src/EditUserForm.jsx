

import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios'



 async function fetchData(id) {


    const url = `http://localhost:3001/api/user/${id}`;
    let res = await axios.get(url)
    return res.data
      
        
    
  }

function EditUseForm(props) {

    const [update, setUpdate] = useState(false)
    const [jsonData, setJsonData] = useState()

  useEffect(() => {
    fetchData(props.id)
    .then(d =>{
      setJsonData(d)
        
    })
  }, [update]);
    
   

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {

     data.id = props.id
     console.log(data)
    props.onClick(data); 
  };
  console.log(jsonData,'jsondata')
  const changeValue = useCallback((elements)=>{
    setJsonData(elements)
  },[])
  return (
    <>
    
    { jsonData ? (
        
        
        <div className="modal">
        <div className="modalContent">
          <form name="AddForm" onSubmit={handleSubmit(onSubmit)}>
            <input className="border-2"{...register("name")}       value={jsonData.name}            onChange={(e)=> setJsonData({...jsonData, name:e.target.value})}        type="text" placeholder="Name" />
            <input className="border-2"{...register("surname")}    value={jsonData.surname}         onChange={(e)=> setJsonData({...jsonData, surname:e.target.value})}     type="text" placeholder="Surname" />
            <input className="border-2"{...register("mail")}       value={jsonData.mail}            onChange={(e)=> setJsonData({...jsonData, mail:e.target.value})}        type="text" placeholder="Mail" />
            <input className="border-2"{...register("phonenumber")}value={jsonData.phonenumber}     onChange={(e)=> setJsonData({...jsonData, phonenumber:e.target.value})} type="text" placeholder="Phone Number" />
            <div className="flexInput">
              <input type="submit" value="Submit" />
              <button value="Cancel" onClick={()=>props.onClick()} type="button">Cancel</button>

            </div>
          </form>
        </div>
      </div>
): null}
</>
  );
}

export default EditUseForm;