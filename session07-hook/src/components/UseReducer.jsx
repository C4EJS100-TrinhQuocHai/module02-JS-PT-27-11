import React, { useReducer } from 'react'

export default function UseReducer() {
    // const initial=0;
    const reducer=(state,action)=>{
        switch (action) {
            case "increase":
                state=state+1
                return state
            default:
                return state
        }
    }
    const [count,ditPatch1] =useReducer(reducer,0)
    const handleIncrease=()=>{
        console.log("1111111");
        ditPatch1("increase");
    }
  return (
    <>
        UseReducer
        {/* quản lý những state phức tạp
        bản chất cũng giống như useState nhưng dùng để quản lý các state phức tạp
        và công dụng sau này học redux.
         */}
         <p>count:{count} </p>
         <p onClick={handleIncrease}> <button>tăng</button> </p>
         <p>    <button>giảm</button></p>
    </>
  )
}
