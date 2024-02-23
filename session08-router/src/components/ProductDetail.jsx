import React from 'react'
import { useParams } from 'react-router-dom'
let products=[
    {
        id:1,
        name:"iphone5",
        description:"màu hồng"
    },
     {
        id:2,
        name:"iphone6",
        description:"màu xanh"
    },
     {
        id:3,
        name:"iphone7",
        description:"màu đỏ"

    }
]
export default function ProductDetail() {
    let useParam= useParams();
    console.log("1111111",useParam);
    let data=products.filter((item)=>{
       return item.id==useParam.productId
    })
    console.log("2222",data);
  return (
    <div>ProductDetail-trang chi tiết sản phẩm
        <p>{data[0].name}</p>
        <p>{data[0].description}</p>
    </div>
  )
}
