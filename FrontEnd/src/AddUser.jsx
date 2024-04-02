import React from "react";
import MyAddModal from "./MyAddModal";

function AddUser(props){
    const [visible,setvisible] = React.useState(false)

    function AddUserFetch(requesOptions){
            fetch('http://localhost:3001/api/add', requesOptions)
            
            props.onCeck()
                    
            
    }
    
    function addUsersPopup(obj, cacel){
            if(obj){
                
                const requesOptions =  {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(obj)
                }
                
                AddUserFetch(requesOptions)
                
            }
                
                
                setvisible(!visible) 
            }

    return(
        <>
        <div className="border border-gray-300 bg-white rounded-md shadow-md p-4 hover:cursor-pointer jus" onClick={()=> setvisible(true)}>Add</div>
        {visible && <MyAddModal onClick = {addUsersPopup}/>}
    
        </>

    )


}

export default AddUser