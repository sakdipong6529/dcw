import React, { useEffect }  from 'react';
import ProductCard_Admin from './ProductCard_Admin'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'
import './ProductList.css'

const ProductList = ()=>{
    const products = useSelector(state => state.product);
    const dispatch = useDispatch();
    const getProducts = async () => {
        const result = await axios.get(`https://bof-dcw.herokuapp.com/api/products`)
       
        const action = {type:'GET_PRODUCTS',product: result.data}
        dispatch(action)
      }
      useEffect(() => {
        getProducts()
      }, [])
       console.log("data",products)
      if (!products || !products.length)
        return (<h2>No data</h2>)

    return(
        <div className='scr' >
            {
                products.map((product, index) => (
                    <td key={index} >

                        < ProductCard_Admin {...product}  />
                    </td>
                ))
            }
        </div>
    )


}
export default ProductList
