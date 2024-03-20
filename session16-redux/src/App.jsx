import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseCounter,decreaseCounter } from './redux/actions/counter'
export default function App() {
  const counter=  useSelector((state)=>{
    // console.log("1111111",state);
    return state
  })
  const disPatch=useDispatch();
  // hàm tăng giá trị của biên count
  const increaseCount=()=>{
    // console.log("đã ăn vào hàm");
      disPatch(increaseCounter(3));
  }
    const decreaseCount=()=>{
    // console.log("đã ăn vào hàm");
      disPatch(decreaseCounter(2));
  }
  return (
    <div>
      App
      <br />
      <p> giá trị count: {counter.counter1}</p>
      <button onClick={increaseCount}>tăng</button>
      <button onClick={decreaseCount}>giảm</button>
    </div>
  )
}
