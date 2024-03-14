import React from 'react'
import { useEffect } from 'react'
import a from "axios"

export default function CreateUser() {
    /* tiến hành thêm mới user */
    useEffect(()=>{
        let newUser={
            name:"vân anh"
        }
        a.post("http://localhost:8080/users",newUser);
    },[])
  return (
    <div>
        CreateUser

    </div>
  )
}
