import React, { useEffect, useRef, useState } from 'react'
export default function UseRef() {
    const [count,setCount]= useState(0);
    const refHook= useRef(0);
    // console.log("111111",ref);
    /// trả về object trong object có 1 thuộc tính mặc định là current
    const obj={
        count:0,
    }
    const handleIncrease=()=>{
        obj.count=obj.count+1;
        console.log("count sau khi click",obj.count);
        refHook.current=refHook.current+1
        setCount(count+1);
    }
    useEffect(()=>{
        refHook.current.focus();
    },[])
  return (
    <>
        UseRef
        {/* <p>count :{refHook.current}</p> */}
        <button onClick={handleIncrease}>click</button> <br />
        <label htmlFor="">userName</label>
        <input type="text" ref={refHook}/>
    </>
  )
}
