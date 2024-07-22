import { useRef } from "react";
import postAxiosSignIn from "./postAxiosSignIn";

export default function OwnSingIn(props){

    const formRef = useRef()

    const handleSubmit = (event) => { 
               
        event.preventDefault();

        const data = new FormData(formRef.current);
        let dataUser = {
          email: data.get('email'),
          password: data.get('password'),
        }
        console.log(dataUser)
        postAxiosSignIn(dataUser)
       .then((proc)=>{
        console.log(proc,'proccc')
         if(proc == 'ok'){
         console.log(proc)
        props.handelOpen()
       }
    
       })
       
      };

    
    return(
       <div className="SingIn">
        <div>
            <img src="https://img.icons8.com/?size=100&id=12324&format=png&color=000000"></img>
        </div>
        <div className="inputesDiv">

            <form className="formInputa" onSubmit={handleSubmit} ref={formRef}>
                <input className='inputes' type="text" name="email" placeholder="Email"/>
                <input className='inputes' type="password" name="password" placeholder="Password"/>
                <div  className='next' > 
                    <button type="submit">
                            <img  src="https://img.icons8.com/?size=100&id=ZCXN8e3z5Vwo&format=png&color=000000" alt="" />
                    </button>

                </div>
            </form>
        </div>
        <div>
           
        </div>
        <div>
            <p onClick={props.handleSignUpClick} className="forgot" >Don't have an account? Sign Up</p>
        </div>

       </div>
    )}

