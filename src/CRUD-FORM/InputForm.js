import React from 'react';
//import './InputForm.css';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';

const InputForm = props => {
    const dispatch = useDispatch();
    const form = useSelector(state => state.form)
    const products = useSelector(state => state.product)

    const addProduct = async () => {
        await axios.post(`http://localhost/api/products`, form)
        dispatch({
            type: 'ADD_PRODUCT', product: {
                no: products.length > 0 ? products[products.length-1].no+1 : 0,
                ...form
            }
        })
    }

    
    return (
        <div>
            <h2>Add Product</h2>
           {form.name} {form.surname} {form.id} {form.Major} {form.src} 
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>
                            <input 
                                type="text"
                                onChange={(e) => dispatch({ type: 'CHANGE_NAME', name: e.target.value })}
                            
                                
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Surname</td>
                        <td>
                        <input 
                                type="text"
                                onChange={(e) => dispatch({ type: 'CHANGE_SURNAME', surname: e.target.value })}
                        />  
                        </td>
                    </tr>
                    <tr>
                        <td>ID</td>
                        <td>
                        <input 
                                type="text"
                                onChange={(e) => dispatch({ type: 'CHANGE_ID', id: e.target.value })}
                        />   
                        </td>
                    </tr>
                    <tr>
                        <td>Major</td>
                        <td>
                        <input 
                                type="text"
                                onChange={(e) => dispatch({ type: 'CHANGE_MAJOR', Major: e.target.value })}
                        />   
                        </td>
                    </tr>
                    <tr>
                        <td>src</td>
                        <td>
                        <input 
                                type="text"
                                onChange={(e) => dispatch({ type: 'CHANGE_SRC', src: e.target.value })}
                        />   
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button onClick ={addProduct}>CREATE</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default InputForm