import React, { useEffect }  from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import './ProductCard.css'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';


const ProductCard = (props)=>{
    const dispatch = useDispatch();
    const form = useSelector(state => state.form)
    const getProducts = async () => {
        const result = await axios.get(`https://bof-dcw.herokuapp.com/api/products`)
       
        const action = {type:'GET_PRODUCTS',product: result.data}
        dispatch(action)
      }
      useEffect(() => {
        getProducts()
      }, [])

    const deleteProduct = async ()=>{
        await axios.delete(`https://bof-dcw.herokuapp.com/api/products/${props.no}`)
        dispatch({type:'DELETE_PRODUCT',no: props.no })
        getProducts()
          
    }
    const updateProduct = async () => {
        await axios.put(`https://bof-dcw.herokuapp.com/api/products/${props.no}`,form)
         dispatch(
             {type:'UPDATE_PRODUCT',
             no: props.no,
             product:{...form, no:  props.no}
         })
         getProducts()
         
       }
            
    return(
      
      <div className='main'>
 
        <Card style={{ width: '13rem' ,margin:20,}}>
        <Card.Img variant="top" src={props.src} />
        <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.price} B. </Card.Text>
        <button class="button button1" onClick={updateProduct}>Update</button>
        <button class="button button3" onClick={deleteProduct}>Delete</button>
        </Card.Body>
        </Card>

    </div>
    )
}
export default ProductCard
