import React from 'react'
import { useNavigate} from 'react-router-dom';

/* 
tạo danh sách sản phẩm 
 */
let products=[
    {
        id:1,
        name:"iphone5",
    },
     {
        id:2,
        name:"iphone6",
    },
     {
        id:3,
        name:"iphone7",
    }
]
export default function Products() {
    let useNavi=useNavigate();
    const handleClick=(id)=>{
        console.log("11111",id);
         useNavi(`/products/${id}`)
    }
  return (
    <> Danh sách sản phẩm 
        <ul>
            {products.map((item)=>{
            return <li>{item.name}  <button onClick={()=>handleClick(item.id)}>click</button></li>
        })}
        </ul>
    </>
  )
}
