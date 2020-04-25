import React, { useEffect, useState }  from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import './ProductCard.css'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductCard = (props)=>{
    const dispatch = useDispatch();
    const form = useSelector(state => state.form)
    const [count,setCount] = useState(0)
    const [prz,setPrz] = useState(0)

    const getProducts = async () => {
        const result = await axios.get(`http://localhost/api/products`)
       
        const action = {type:'GET_PRODUCTS',product: result.data}
        dispatch(action)
      }
      useEffect(() => {
        getProducts()
      }, [])
    
      const sumPrice = () => {
          setPrz(prz+props.price)
          setCount(count+1)
      }
      const canPrice = () => {
        setPrz(0)
        setCount(0)
        }   
    return(
      <div className='main'>
        <Card style={{ width: '12rem' ,margin:20,}}>
        <Card.Img variant="top" src={props.src} />
        <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.price} B.</Card.Text>
        <button class="button button1" onClick={sumPrice}>Select</button>
        <button class="button button3" onClick={canPrice}>Cancle</button><br/>
        <a className='f1'>{count} : piece   {prz} Bath</a>
        </Card.Body>
        </Card>
      </div>
    )


}
export default ProductCard
