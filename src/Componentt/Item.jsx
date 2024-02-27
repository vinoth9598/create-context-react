import React, { useEffect } from 'react';
import "./css/App.css";
import Image from './Image';
import { useState } from 'react';



function Item({id,images,title,description,price,rating,stock}) {

  const [count,setCount]=useState(+(localStorage.count)|| 0);

  const handlePlus=()=>{
    count !==stock ? 
      (setCount((prevent)=>prevent +1 ),
        localStorage.setItem('count',count)
      
      )
      : 0
    
  }
  const handleMinus=()=>{
    count >0 ? (
      setCount((prevent)=>prevent -1),
      localStorage.setItem('count',count)
      )

    :0
  }

  useEffect(()=>{
      localStorage.setItem('count',count);
  },[])


  return (
    <div >
          
          <div className='head'>
                <div className='content'>
                    <div className='gallery'>
                      <div className='gallery-item'>
                        <Image image={images}/>
                      </div>
                    </div>
              
                    <div className='name-desc'>
                      <h1><span>{title}</span></h1>
                    
                      <h2>Description </h2>
                      <p> <span>{description}</span></p>
                       
                      
                      <h3>Rating <span>{rating}/5.00</span></h3>
                      <h3>Stock <span>{stock - count }</span></h3>
                      <h3>PRICE $<span> {price}</span></h3>
                    <div className='btn'>
                      <p> QUANTITY : <span>{count}</span> </p>
                      <button onClick={(e)=>handlePlus(id)} className='add'>Add</button>
                      <button onClick={()=>handleMinus(id)} className='remove'>Remove</button>
                    </div>
                      
                      <div className='sub'>
                        <h3>TOTAL $ <span>{price *count }</span></h3>
                      </div>
                    </div>
                </div>
            </div>
          
    </div>
   
    
  )
}

export default Item;
