// import React from "react";
// import {useForm} from "react-hook-form"

// function EditUseForm(props){

//     let sendObj = {}
    
//     const {register, handelSubmit,formState: { errors }} = useForm()
//     const test = (d)=>{
//         alert(d)
//     }
//     return(
//         <>
//         <div className="modal">
        
//         <div className="modalContent">


//         <form name="AddForm" onSubmit={handelSubmit(test)}>

//             <input {...register("name")}type="text" placeholder="Name" />
//             <input {...register('surename') }type="text" placeholder="Surname" />
//             <input {...register('mail') }type="text" placeholder="Mail" />
//             <input {...register('phonenumber')}type="text" placeholder="Phone Number" />
//             <div className="flexInput">

//             <input type="submit" value="Submit" onClick={(event) => {

//                 // handelSubmit(test)
//                 // console.log(event)
//                 // event.preventDefault();
//                 // sendObj.id = props.id
//                 // sendObj.name = document.forms["AddForm"].elements[0].value
//                 // sendObj.surname = document.forms["AddForm"].elements[1].value
//                 // sendObj.mail = document.forms["AddForm"].elements[2].value
//                 // sendObj.phonenumber = document.forms["AddForm"].elements[3].value
//                 // console.log(sendObj)
//                 // props.onClick(sendObj)
//                 }}/> 

//         <input  value='Cancel' type="button" onClick={()=> props.onClick(sendObj)}/>
//                 </div>

                
//                 </form>
//                 </div>
//             </div>
    
//         </>
//     )
// }

// export default EditUseForm

import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";



async function fetchData(id) {
    const url = `http://localhost:3001/api/user/${id}`;
    
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was noyt ok');
      }
      const data = await response.json();
      return data
        
    
  }

function EditUseForm(props) {

    const [update, setUpdate] = useState(false)
    const [jsonData, setJsonData] = useState()

  useEffect(() => {
    fetchData(props.id)
    .then(d =>{
        console.log(d,'ddddddddddddddd')
      setJsonData(d)
        
    })
  }, [update]);
    
   

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {

     data.id = props.id
    props.onClick(data); 
  };

  const changeValue = useCallback((elements)=>{
    setJsonData(elements)
  },[])

  return (
    <>
    
    { jsonData ? (
        
        
        <div className="modal">
        <div className="modalContent">
          <form name="AddForm" onSubmit={handleSubmit(onSubmit)}>
            <input className="border-2"{...register("name")}       value={jsonData.name}            onChange={(e)=>changeValue({...jsonData, name:e.target.value})}    type="text" placeholder="Name" />
            <input className="border-2"{...register("surname")}    value={jsonData.surname}         onChange={(e)=> setJsonData({...jsonData, surname:e.target.value})}    type="text" placeholder="Surname" />
            <input className="border-2"{...register("mail")}       value={jsonData.mail}            onChange={(e)=> setJsonData({...jsonData, mail:e.target.value})}    type="text" placeholder="Mail" />
            <input className="border-2"{...register("phonenumber")}value={jsonData.phonenumber}     onChange={(e)=> setJsonData({...jsonData, phonenumber:e.target.value})}    type="text" placeholder="Phone Number" />
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
