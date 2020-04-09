import {createStore, combineReducers} from 'redux'
const initialForm = {
    no: '' ,
    name: '',
    surname: '',
    id: '',
    Major: '',
    GPA: ' '
}
const formReducer = (state=initialForm,action)=>{
    switch(action.type){
        case 'CHANGE_NO': return {...state,no: action.no}
        case 'CHANGE_NAME': return {...state,name: action.name}
        case 'CHANGE_SURNAME': return {...state,surname: action.surname}
        case 'CHANGE_ID': return {...state,id: action.id}
        case 'CHANGE_MAJOR': return {...state,Major: action.Major}
        case 'CHANGE_GPA': return {...state,GPA: action.GPA}
        default:return state;
    }
}

const productReducer=(state=[],action)=>{
    switch(action.type){
        case 'GET_PRODUCTS':
            return action.product
        case 'ADD_PRODUCT': 
            return [...state,action.product]
        case 'DELETE_PRODUCT':
             return state.filter(product => product.no !== +action.no)
        case 'UPDATE_PRODUCT': 
            return state.map(product => {
             if(+product.no === +action.no)
             return action.product;
             else return product;
            })
        default:
            return state;
    }
}
const reducer = combineReducers({
    product: productReducer,
    form: formReducer
})

export const store = createStore(reducer)