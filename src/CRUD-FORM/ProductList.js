import React, { useEffect }  from 'react';
import ProductCard from './ProductCard'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'


const ProductList = ()=>{
    const products = useSelector(state => state.product);
    const dispatch = useDispatch();
    const getProducts = async () => {
        const result = await axios.get(`http://localhost/api/products`)
       
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
        <div >
            {
                products.map((product, index) => (
                    <td key={index} >

                        < ProductCard  {...product}  />
                    </td>
                ))
            }
        </div>
    )


}
export default ProductList
