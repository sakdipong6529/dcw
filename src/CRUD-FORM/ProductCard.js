import React, { useEffect }  from 'react';
//import './StudentList.css';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';

const ProductCard = (props)=>{
    const dispatch = useDispatch();
    const form = useSelector(state => state.form)

    const getProducts = async () => {
        const result = await axios.get(`http://localhost/api/products`)
       
        const action = {type:'GET_PRODUCTS',product: result.data}
        dispatch(action)
      }
      useEffect(() => {
        getProducts()
      }, [])

    const deleteProduct = async ()=>{
        await axios.delete(`http://localhost/api/products/${props.no}`)
        dispatch({type:'DELETE_PRODUCT',no: props.no })
        getProducts()
          
    }
    const updateProduct = async () => {
        await axios.put(`http://localhost/api/products/${props.no}`,form)
         dispatch(
             {type:'UPDATE_PRODUCT',
             no: props.no,
             product:{...form, no:  props.no}
         })
         getProducts()
         
       }
         
       
    
    return(
        <div >
          <li>{props.name} {props.surname} :{props.id} : {props.Major} GPA {props.GPA}
          <button onClick={deleteProduct}>Delete</button>
          <button onClick={updateProduct}>Update</button>

          </li>
    </div>
    )


}
export default ProductCard
