import React, { useEffect } from 'react'

export default function Update() {
  useEffect(()=>{
    let newUser={
      name:"Phương Anh"
    }
      fetch("http://localhost:8000/users/3",{
            method:"PATCH",
            headers: {
            "Content-Type": "application/json",
            },
            body:JSON.stringify(newUser)
      })
  },[])
  return (
    <div>
        ******************** <br />
        Update
        {/* cập nhật user quan trọng nhất phải biết được id của user cần cập nhật
        -Để cập nhật có 2 method cập nhật
        1.PUT : cập nhật hoàn toàn (tức là cập nhật hết các trường)
        2.PATCH : không cập nhật hết, chỉ cập nhật những trường cần cập nhật
         */}

    </div>
  )
}
