import React from 'react';
import './App.css';
import axios from 'axios'
import {useDispatch } from 'react-redux';
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Carousel from "./Components/Slide";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//import DemoCarousel from './Components/Slidebar'
import LoginForm from './Components/LoginForm'



function App() {
  const dispatch = useDispatch();
  
  const getProducts = async () => {
    const result = await axios.get(`https://bof-dcw.herokuapp.com/api/products`)
    const action = {type:'GET_PRODUCTS',products: result.data}
    dispatch(action)
  }

  return (
    <div className='bg'>   
    <NavBar/>
    <h1 className='ft'>Mini-Project SHOP</h1>
    
    <Carousel/>   
    
    <LoginForm />
    
    <Footer/>
      
    </div>
  );
}

export default App;
