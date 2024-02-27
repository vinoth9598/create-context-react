import React from 'react';
import "./css/App.css";

function Image({image}) {
  return (
    <div  >
        {
            image.map((img,index)=>(
                <img className='img' key={index} src={img}></img>
            ))
        }
    </div>
  )
}

export default Image;
