import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
export default function Intro() {
    const useNavigate1111=useNavigate();
    const handleClick=()=>{
        console.log("11111");
        useNavigate1111("/");
        // khhi muốn chuyển trang dùng useNavigate
    }
  return (
    <div>
        Intro
        <button onClick={handleClick}>click comeback home</button>
        <Outlet></Outlet>
    </div>
  )
}
