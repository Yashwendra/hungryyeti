import { ADD_TO_CART } from "../constants"

export const AddtoCart=(data)=>{
    return{
        type:ADD_TO_CART,
        data:data
    }
}

// export const RemoveToCart =(data)=>{
//     return{
//         type:'REMOVE_FROM_CART',
//         data:data
//     }
// }