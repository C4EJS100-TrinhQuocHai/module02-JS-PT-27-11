import React from 'react'
import GetUsers from './components/GetUsers'
import CreateUser from './components/CreateUser'
import DeleteUser from './components/DeleteUser'
import Update from './components/Update'

export default function App() {
  return (
    <div>
        App 
        {/* 
          Khi lưu dữ liệu trên json-server thì phải thực hiện đƯợc
          CRUD (thêm mới thông tin, lấy thông tin, update, thông tin, xoá thông tin)
          để làm việc với json-server có 2 cách
          1. Dùng phương thức fetch( có sẵn trong javascript)
          2. Dùng thư hiện axios để tương tác CRUD
         */}
         <GetUsers></GetUsers>
         <CreateUser></CreateUser>
         <DeleteUser></DeleteUser>
         <Update></Update>
    </div>
  )
}
