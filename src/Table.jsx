import React, { useState, useEffect, useCallback } from "react";
import TableContent from "./TableContent";
import AddUser from "./AddUser";
import useFetch from "./useFetch";
import AlertComponent from "./App/AlertComponent";
import AlertComponentError from "./App/AlertComponentError";






function Table() {

  const [update, setUpdate] = useState(false)
  
  const [alertSuccess , setAlertSuccess ] = useState(false)
  const [alertError, setAlertError] = useState(false)
 
  const {data,loading,error} = useFetch(`http://localhost:3001/api`,update)

  const UpDatet = useCallback((c) => {
    if(c){
      console.log('is working add')
      setUpdate(!update)
      setAlertSuccess (true)
    }else{

      setUpdate(!update)
      setAlertError (true)

    }
   
  }, [data])




  console.log(data)


  if(loading){
    return <h1>Loading...</h1>
  }
  if(data){
        
        
        
        return (
          <>
          <div className="relative">

            
          
          <div className="Table">
            <AddUser onCeck={UpDatet}/>
              <table>
                <thead>
                </thead>
                <tbody>
            
                  {data.map(function (it, index) {
                    return (
                      
                      <TableContent onCeck={UpDatet} key={index} item={{
                        
                        id: it._id,
                        name: it.name,
                        surname: it.surname,
                        mail: it.mail,
                        phonenumber: it.phonenumber,
                      }} />
                      
                    )
                  })
                  
                }</tbody>
              </table>

                   
                </div>
                <div className="absolute buttom-0 right-0"> 
              {alertSuccess  ? <AlertComponent/> : null}
              {alertError ? <AlertComponentError/> : null}
            </div>
          </div>
                </>
        );
        
      }
}
export default Table