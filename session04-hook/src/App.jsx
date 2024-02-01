import React from 'react'
import UseState from './components/UseState'
import UseEffect from './components/UseEffect'
import UseContext from './components/UseContext'
import A from './components/A'
import { useState } from 'react'
import { createContext } from 'react'


export const createContex=createContext();
export default function App() {
  const [name,setName]=useState("hoa");
  return (
    <>
            <div>
                App
            </div>
            <UseState></UseState>
            <UseEffect></UseEffect>
            <UseContext></UseContext>
            <createContex.Provider value={name} >
              <A></A>
            </createContex.Provider>
      </>
  )
}
