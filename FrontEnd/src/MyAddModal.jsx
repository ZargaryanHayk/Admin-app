import React from "react";

function MyAddModal(props){

   let sendObj = {}
    return(
        <>
        <div className="modal">
        
        <div className="modalContent">
        <form name="AddForm">

            <input type="border-2" placeholder="Name" />
            <input type="border-2" placeholder="Surname" />
            <input type="border-2" placeholder="Mail" />
            <input type="border-2" placeholder="Phone Number" />
            <div className="flexInput">

            <input type="submit" value="Submit" onClick={(event) => {
                event.preventDefault();
                
                sendObj.name = document.forms["AddForm"].elements[0].value
                sendObj.surname = document.forms["AddForm"].elements[1].value
                sendObj.mail = document.forms["AddForm"].elements[2].value
                sendObj.phonenumber = document.forms["AddForm"].elements[3].value
                props.onClick(sendObj)
                
                
            }}/>
            
            <input value="Cancel" type="button" onClick={()=> props.onClick()}/>
            </div>


        </form>
        </div>
        </div>
        </>

    )
}

export default MyAddModal