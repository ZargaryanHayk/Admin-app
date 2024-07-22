import React from "react";
import { useForm } from "react-hook-form";

function MyAddModal(props){
    const {register,handleSubmit,formState: {errors}} = useForm()

    const onSubmit = (d)=>{
        props.onClick(d)
    }

    return(
        <>
        <div className="modal">
        
        <div className="modalContent">
        <form name="AddForm " onSubmit={handleSubmit(onSubmit)}>

            <input type="border-2"{...register("name")} placeholder="Name" />
            <input type="border-2"{...register("surname")} placeholder="Surname" />
            <input type="border-2"{...register("mail")} placeholder="Mail" />
            <input type="border-2"{...register("phonenumber")} placeholder="Phone Number" />
            <div className="flexInput">

            <input type="submit" value="Submit"/>
            
            <input value="Cancel" type="button" onClick={()=> props.onClick()}/>
            </div>


        </form>
        </div>
        </div>
        </>

    )
}

export default MyAddModal