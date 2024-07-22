import { useRef } from "react"
import '../App/App.css'
import PostAxio from "./postAxios";



export default function OwnSingUp(props){
    const formRef = useRef()
    const handleSubmit =  async (event) => {
        event.preventDefault();
        const data = new FormData(formRef.current);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
          name: data.get('firstName'),
          lastName: data.get('lastName')
    
        });
        let newData = {
          email: data.get('email'),
          password: data.get('password'),
          name: data.get('firstName'),
          lastName: data.get('lastName')
        }
        console.log(newData)
        let proc = await PostAxio({data:newData})
        
        console.log(proc,'proc')


        if(proc == 'ok'){
            props.handleSignUpClick()
        }
    
      };
      

    return(
        <div className="SingIn">
        <div>
            <img src="https://img.icons8.com/?size=100&id=12786&format=png&color=000000"></img>
        </div>
        <div className="inputesDiv">

            <form className="formInputa" onSubmit={handleSubmit} ref={formRef}>
                <input className='inputes' type="text" name="firstName" placeholder="First name"/>
                <input className='inputes' type="text" name="lastName" placeholder="Last name"/>
                <input className='inputes' type="text" name="email" placeholder="Email"/>
                <input className='inputes' type="text" name="password" placeholder="Password"/>
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
            <p onClick={props.handleSignUpClick} className="forgot" >Already have an account? Sign in</p>
        </div>

       </div>
    

    )
}