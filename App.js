import logo from './logo.svg';
import bottle from './bottle.png';
import { FaAlignJustify } from 'react-icons/fa';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { FiShoppingCart } from "react-icons/fi";
import React, { Component } from 'react';
import './App.css';


function App()
{
  return (
      // Alignment for the entire page 
      <div class="spacing" style={{clear:'both'}}>
        <h2 class="options"><FaAlignJustify style={{color:'white'}}/></h2>
        <h2 class="cart" ><FiShoppingCart style={{color:'white'}}/></h2>
        <hr/><br/>
        <div class="spacing1" >
          <div id="skincare"> </div>
          <div id="bottle1"></div>
          <div id="bottle2"></div>
        </div>
        <h1 id="styling">Everyday rinse and reload</h1>
        <p id="styling2">Achieve your dream skin goal with this complete package of skincare produts that will rejuvenate your day .</p>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div id="rating">
            <Stack spacing={1}>
              <Rating style={{color:'white'}} name="half-rating-read" defaultValue={4.5} precision={0.1} readOnly />
            </Stack></div>
          <p style={{color:'white',fontWeight:'bold'}}>4.5</p>
          <p id="review">Click to read reviews {'>'} </p>
        </div>
          <p style={{color:'white',fontweight:'bold',fontSize:'30px'}}> Rs 899   <span id="price" style={{paddingLeft:'30px'}}>  Rs 1299</span></p>
          <div id="section1">
            <p style={{backgroundColor:'rgba(6, 123, 216, 1)',borderRadius:'15px',color:'white',fontSize:'10px',width:'30%',paddingLeft:'20px',margin: '10px 10px 5px 5px'}}>Most Popular</p>
            <p style={{color:'white'}}>1 Month Pack (4 tubes)</p>
            <p style={{color:'rgba(70, 93, 104, 1)'}}>Savings: Rs 200 <span style={{color:'white',display:'block' , float:'right',fontWeight:'bold'}}> Rs 595</span></p>
            <p style={{color:'rgba(36, 219, 109, 1)'}}>38% Saved <span style={{color:'rgba(219, 157, 36, 1)',paddingLeft:'30px'}}>  Best Results</span> <span id="span-style1"> Rs 795</span></p>
          </div><br/>
         <div id="section2">
            <p style={{color:'white'}}>3 Months Pack (12 tubes)</p>
            <p style={{color:'rgba(70, 93, 104, 1)'}}>Savings: Rs 100 <span style={{color:'white',display:'block' , float:'right',fontWeight:'bold'}}> Rs 899</span></p>
            <p style={{color:'rgba(36, 219, 109, 1)'}}>12% Saved <span id="span-style2"> Rs 999</span></p>
          </div>
          <br/>
          <a href=" " style={{textDecoration:'none'}}><div style={{backgroundColor:'rgba(19, 50, 74, 1)',color:'white',textAlign:'center',height:'40px',paddingTop:'17px',fontWeight:'bold'}}><FiShoppingCart style={{color:'white'}}/>  ADD  TO  CART  </div></a>
      </div>
    );
}

export default App;
