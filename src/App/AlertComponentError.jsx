import { useEffect, useState } from "react";
import Alert from '@mui/material/Alert';

const AlertComponentError = () => {
   
  const [hide, setHide] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setHide(false)
    },2000)
  },[])
    
    return (
      <>{hide ?  <Alert severity="error">Failed .</Alert> : null}</>
    );
  };
  
  export default AlertComponentError;