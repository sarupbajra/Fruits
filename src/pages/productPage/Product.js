import React from 'react'
import {  useParams } from 'react-router-dom';


export default function product() {
  let { productId,product} = useParams(); 

  return(
    <div> My favorite fruit is {productId} {product}</div>

  );
}


 
 
