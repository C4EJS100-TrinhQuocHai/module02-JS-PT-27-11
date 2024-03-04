import React from 'react'
import Header from './components/Header'

export default function App() {
  return (
    /* 
      Redux đây là 1 thư viện (bên khác không phải của react) 
      giúp cho việc quản lý state tập trung được chứa ở trong store hay còn gọi là kho
      -trong store chứa reducer(bản chất là hàm nó sẽ đi tính toán cập nhật lại state
        dựa vào dispatch)
      -dùng với reactjs cũng được mà dùng js cũng đưỢc
      -khi truyền dữ liệu trong reactjs thì bắt buộc phải truyền theo kiểu cha con
      ví dụ ông muốn truyền dữ liệu cho cháu thì phải qua ông xuống bố sau bố xuống cháu
      -cần redux để giúp cho việc quản lý state tập trung
      -cách cài đặt 
      -npm i redux react-redux
     */
    <div>
      App
        <Header ></Header>  
    </div>
  )
}
