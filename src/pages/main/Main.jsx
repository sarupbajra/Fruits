import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Main() {
    const navigate = useNavigate();
    const fruits=["apple","watermelon","mango"]
    console.log("naviagtetete",navigate)
  return (
    <div className='main'>
        List
        {fruits.map((product,index)=>{
            return <div key={index} onClick={()=>{navigate(`/product/${index}/${product}`)}}>{product}</div>
        })}
                {/* <ul>
            {fruits.map((product,index)=>{
                return(
                    <li onClick={()=>navigate(`/product/${product.id}`)}>
                      {product}
                    </li>
                )
            })}
         
        </ul> */}
    </div>
  )
}
