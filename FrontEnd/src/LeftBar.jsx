import React  from "react";
import LeftBarNames from "./LeftBarNames";

function LeftBar(props){

    return(
        <div className="bg-black w-1/5 h-screen ">
            <LeftBarNames text='Users' ClassNameDiv='p-2 bg-sky-700' href=''/>
        </div>
    )

}


export default LeftBar