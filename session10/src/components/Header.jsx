import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Header() {
    /* 
        lấy dữ liệU từ trong kho ra dùng
        useSelector
        sẽ đi kiểm tra xem state có thay đổi hay không để cập nhật
        khi muốn cập nhật state mới thì dùng useDispatch()
     */
    let data1=useSelector((state)=>{
        console.log("1111111",state);
        return state;
    })
    let dispatch1= useDispatch();
    const increase=()=>{
        // console.log("đã ăn vào hàm");
        dispatch1({
            type:"increase"
        })
    }

  return (
    <div>Header
        <p>count :{data1.countReducer1.map((item)=>{
            return <p>{item}</p>
        })}</p>
        <button onClick={increase}>tăng</button>
    </div>
  )
}
