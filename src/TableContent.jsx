import React, { useCallback } from "react";
import MyModal from "./MyModal.jsx";
import EditUseForm from "./EditUserForm.jsx";
import axios from 'axios'


export default function TableContent(props){

   function delFetch(id){
     try {
        const token = localStorage.getItem('token')
        axios.delete(`http://localhost:3001/api/user/${id}`,{
          
        headers: {
            'Authorization': `Bearer ${token}`
          }
        
        })
         .then(r => {
          props.onCeck(true)
         })
         .catch((e)=>{
          props.onCeck(false)
         })
     
    } catch (error) {
      return undefined;
  
      // Return an empty array in case of an error
    }
  
  }
  function EditFetch(obj){
    const token = localStorage.getItem('token')

    axios.patch(`http://localhost:3001/api/user/${obj.id}`,  obj,{
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(r => {
          console.log(r.status)
          props.onCeck(true)
    }).catch((e)=>{
      props.onCeck(false)
     })

  }

    const [visibleDelete,setvisible] = React.useState(false)
    const [visibleEdit,setvisibleEdit] = React.useState(false)

    const DeleteReq = useCallback((del,id) =>{

      if(del){delFetch(id)}
      setvisible(!visibleDelete)
        
        
      })

const Edit = useCallback( (obj)=>{
  if(obj){

       
  EditFetch(obj)
   
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
            {visibleDelete &&  <MyModal onClick={DeleteReq}  id={props.item.id} />}
    

          <td className="border border-gray-300 bg-white rounded-md shadow-md p-4 hover:cursor-pointer"onClick={()=> setvisibleEdit(true)}  >Edit</td>
          {visibleEdit && <EditUseForm  onClick={Edit} id= {props.item.id}/> }
          </tr>
          
 
    )



}