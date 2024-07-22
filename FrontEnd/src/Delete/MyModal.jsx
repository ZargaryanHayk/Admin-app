import React from "react";


function MyModal(props){


    return(
      <div className="modal">
        
      <div className="modalContent">
        <div >
              <p> Are you sure you wanna delete</p>
              <button className="border border-gray-300 bg-white rounded-md shadow-md p-4 hover:cursor-pointer" onClick={()=> {
                props.onClick(true,props.id)
              }}>Yes</button>
              <button  className='border border-gray-300 bg-white rounded-md shadow-md p-4 hover:cursor-pointer'onClick={()=> props.onClick(false)}>NO</button>
        </div>
      </div>
      </div>
    )

}


export default MyModal