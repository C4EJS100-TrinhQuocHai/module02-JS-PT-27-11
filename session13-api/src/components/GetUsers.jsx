import React, { useEffect, useState } from 'react'

export default function GetUsers() {
    const [users,setUsers]=useState([]);
    /* 
    Thông thường các tác vụ call API thì nên call ở trong useEffect
     */
    useEffect(()=>{
        // bắt đầu đi lấy data
        fetch("http://localhost:8000/users")
        .then(res=>res.json())
        .then(data=>{
            // console.log("1111111",data);
            setUsers(data);
        })
        /* 
        promise
         */
    },[])
  return (
    <div>
        GetUsers
       <ul>
         {
            users.map((item,index)=>{
                return <li key={index}>{item.name}</li>
            })
        }
       </ul>
       <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên </th>
                </tr>
            </thead>
            <tbody>
               {
                    users.map((item,index)=>{
                        return <tr key={index}> 
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                               </tr>
                    })
                }
            </tbody>
       </table>
    </div>
  )
}
