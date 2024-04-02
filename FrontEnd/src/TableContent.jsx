import React, { useCallback } from "react";
import MyModal from "./MyModal.jsx";
import EditUseForm from "./EditUserForm.jsx";



export default function TableContent(props){

   function delFetch(requesOptions){
  
    try {
         fetch('http://localhost:3001/api/delet',  requesOptions)
         .then(r => {
          console.log(r.status)
          props.onCeck()
         })
     
    } catch (error) {
      return undefined;
  
      // Return an empty array in case of an error
    }
  
  }
  function EditFetch(requesOptions){

    fetch('http://localhost:3001/api/edit',  requesOptions)
    .then(r => {
          console.log(r.status)
          props.onCeck()
    })

  }

    const [visibleDelete,setvisible] = React.useState(false)
    const [visibleEdit,setvisibleEdit] = React.useState(false)

    const DeleteReq = useCallback((del,id) =>{

        if(del){
          const sendJson = {"id":id}
          const requesOptions =  {
          method: "DELETE",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(sendJson)
        }
        delFetch(requesOptions)

        
      
        
      }
      setvisible(!visibleDelete)
        
        
      })

const Edit = useCallback( (obj)=>{
  if(obj){

    let requesOptions = {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    }
    // mancela fily kardaly arvi
    
  EditFetch(requesOptions)
   
  }
    
  setvisibleEdit(!visibleEdit)


})
      

    return(
       
         <tr className="flex">
            <td className="px-2 py-4">{props.item.name}</td>
            <td className="px-2 py-4">{props.item.surname}</td>
            <td className="px-2 py-4">{props.item.mail}</td>
            <td className="px-2 py-4">{props.item.phonenumber}</td>
            <td className="border border-gray-300 bg-white rounded-md shadow-md p-4 hover:cursor-pointer" onClick={()=>setvisible(true)} >Delete</td>
            {visibleDelete &&  <MyModal onClick={DeleteReq}  id={props.item.id} text_for_pop='Are you sure you wanna delete'/>}
    

          <td className="border border-gray-300 bg-white rounded-md shadow-md p-4 hover:cursor-pointer"onClick={()=> setvisibleEdit(true)}  >Edit</td>
          {visibleEdit && <EditUseForm  onClick={Edit} id= {props.item.id}/> }
          </tr>
          
 
    )



}