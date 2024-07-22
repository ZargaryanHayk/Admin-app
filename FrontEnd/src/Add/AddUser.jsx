import React, { useEffect } from "react";
import MyAddModal from "./MyAddModal";
import axios from 'axios'


function AddUser(props) {

    const [visible, setvisible] = React.useState(false)

    function AddUserFetch(requesOptions) {

        const token = localStorage.getItem('token')

        axios.post(`http://localhost:3001/api/user`, requesOptions, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(() => {
                props.onCeck(true)

            })
        // props.onCeck(true)





    }

    function addUsersPopup(obj, cacel) {
        if (obj) {


           

            AddUserFetch(obj)

        }


        setvisible(!visible)
    }

    return (
        <>
            <div className="border border-gray-300 bg-white rounded-md shadow-md p-4 hover:cursor-pointer jus" onClick={() => setvisible(true)}>Add</div>
            {visible && <MyAddModal onClick={addUsersPopup} />}

        </>

    )


}

export default AddUser