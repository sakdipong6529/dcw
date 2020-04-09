import React from 'react';
import './App.css';
import ProductList from './CRUD-FORM/ProductList'
import InputForm from './CRUD-FORM/InputForm'
import axios from 'axios'
import {useDispatch } from 'react-redux';
import NavBar from './Components/NavBar'
//import DemoCarousel from './Components/Slidebar'



function App() {
  const dispatch = useDispatch();
  
  const getProducts = async () => {
    const result = await axios.get(`http://localhost/api/products`)
    const action = {type:'GET_PRODUCTS',products: result.data}
    dispatch(action)
  }

  return (
    <div>

      
      
      <NavBar/>
      <h2>Redux products</h2>
     
      <ProductList/>
      <InputForm/>
      
    </div>
  );
}

export default App;
