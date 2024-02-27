import React, { useContext } from 'react';
// import "./Componentt/css/App.css";
import Item from './Componentt/Item';
import { userContext } from './main';


function App() {
    
    const {products} =useContext(userContext);
 
  return (
    <div>
      
      <div>
        {
            products.map((cart)=>{
              
               return (
                
                  <Item key={cart.id} {...cart}/>
              
               )
        })
        }

      </div>
       
    </div>
  )
}

export default App;
