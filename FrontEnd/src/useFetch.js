import { useEffect, useState } from "react";
import axios from 'axios'


function useFetch(url, update){
    const [loading,setLoading] = useState(false)
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)
     useEffect(()=>{
        setLoading(true)
        axios.get(url).then((r)=>{
            setData(r.data)
        }).catch((e)=>{
            setError(e)
        }).finally(()=>{
            setLoading(false)
        })

    },[url,update])
    return {data,loading,error}
}

export default useFetch