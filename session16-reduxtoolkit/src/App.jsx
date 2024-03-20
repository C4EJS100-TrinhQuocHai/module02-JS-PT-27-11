import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase1 } from './redux-toolkit/reducers/counter'
import { addJob } from './redux-toolkit/reducers/totoList'
export default function App() {
  const counter = useSelector((state)=>{
       console.log("11111",state);
      return state
  })
  const disPatch= useDispatch();
  const increase=()=>{
    disPatch(increase1())
  }
  const addTodo=()=>{
    let newJob={
      id:5,
      name:"học lập trình",
    }
    disPatch(addJob(newJob));
  }
  return (
    <div>
        REDUX TOOLKIT <br />
        <p> giá trị biến count: {counter.counter11.value}</p>
        <button onClick={increase}>tăng</button>
        <button onClick={addTodo}>add job</button>

    </div>
  )
}
