import React, { useEffect } from 'react'
import axios from 'axios'
 function DeleteUser() {
  /* xoá user
      phải cần biết xoá user nào dựa vào id
   */
  useEffect(()=>{
    let userId=1;
    axios.delete(`http://localhost:8080/users/${userId}`)
  },[])
  return (
    <div>DeleteUser</div>
  )
}
export {DeleteUser}