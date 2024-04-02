import React from "react";


function LeftBarNames(props){

        const text =  props.text
        const ClassNameDiv = props.ClassNameDiv
        const ClassNameA = props.ClassNameA
        const hrefRequest  = props.href

        return(
            <div className={ClassNameDiv}> 

            <a href={hrefRequest} className={ClassNameA}>{text}</a>

            </div>
        
        )
}


export default LeftBarNames