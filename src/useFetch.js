import { useEffect, useState } from "react";
import axios from 'axios'


function useFetch(url, update){
    const [loading,setLoading] = useState(false)
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)
    const token = localStorage.getItem('token')

     useEffect(()=>{
        setLoading(true)
        axios.get(url,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((r)=>{
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