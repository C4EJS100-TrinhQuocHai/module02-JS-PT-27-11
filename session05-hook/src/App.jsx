import React from 'react'

export default function App() {
  /* Tạo ứng dụng todolist bằng useState */
  let name="hoa";

  /* 
    products : []; chứa danh sách sản phẩm
    category : []; chứa danh mục sản phẩm
    users    : [{
      name:"chung",
      pass:"123",
      email:"chung1@gmail.com",
    },{
       name:"nam",
      pass:"234",
      email:"chung@gmail.com",
    }]; lưu thông tin của user
    email :chung@gmail.com
    pass:235
   */

  let students=[
        {
          name:"hoa",
          age:20,
      },
        {
          name:"minh",
          age:25,
      }
  ]
  return (
    <>
      <div>App {name}</div>
       <ul>
         {students.map(( item )=>{
            return  <li> {item.name}</li>
        })}
       </ul>
    </>
  )
}
