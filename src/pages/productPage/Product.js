import React from 'react'
import {  useParams, useNavigate } from 'react-router-dom';

  export default function product() {
  let { productId,product} = useParams(); 
  return(
    <div>
      <h1>{productId}</h1>
       <div> My favorite fruit is {product}</div>
       
    </div>
   
  );}
  export const GoBackButton =() => {
    const Navigate = useNavigate();
    const handleClick = () => {
      Navigate.goBack();
    } 
    return (
      <div>
        <button onClick = {handleClick}> Go Back</button>
       </div>
    )
};

 

 
 
