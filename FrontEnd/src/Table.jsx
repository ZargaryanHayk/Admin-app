import React, { useState, useEffect, useCallback } from "react";
import Model from 'react-modal'
import TableContent from "./TableContent";
import AddUser from "./AddUser";


async function fetchData() {
  const url = 'http://localhost:3001/api';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was noyt ok');
    }
    const data = await response.json();


    return data;
  } catch (error) {
    return undefined;

    // Return an empty array in case of an error
  }
}

function Table() {

  const [update, setUpdate] = useState(false)
  const [jsonData, setJsonData] = useState(undefined)

  useEffect(() => {
    fetchData().then(fetchedData => {

      setJsonData(fetchedData);
    });
  }, [update]);

 

  const UpDatet = useCallback(() => {

    setUpdate(!update)
  }, [jsonData])



  return (
    <div className="Table">
      <AddUser onCeck={UpDatet}/>
      {jsonData ? (
        <table>
          <thead>
          </thead>
          <tbody>
            
            
            

            {jsonData.map(function (it, index) {
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

      ) :
        <div className="loader-container">
          <div className="loader"></div>
        </div>}
    </div>
  );

}
export default Table