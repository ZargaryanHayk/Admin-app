import { useEffect, useState } from "react";
import Alert from '@mui/material/Alert';

const AlertComponent = () => {
   
  const [hide, setHide] = useState(true)
  console.log('stex')
  useEffect(()=>{
    setTimeout(()=>{
      setHide(false)
    },2000)
  },[])
    
    return (
      <>{hide ?  <Alert variant="outlined" severity="success"> Successed .</Alert> : null}</>
    );
  };
  
  export default AlertComponent;