import React, { useEffect } from 'react'
import axios from "axios"
export default function GetAllData() {
    
    useEffect(()=>{
        axios.get("http://localhost:8080/users")
        .then(res=>{
            console.log("respone",res);
        })
    },[])
    
  return (
    <div>
        getAllData
    </div>
  )
}
