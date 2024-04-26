import React from 'react'
import { useDispatch } from 'react-redux'
import { addItemsToCart, remoteItemsFromCart } from '../../../redux/action/cartActions'




const CartItem = ({ item }) => {
    const dispatch = useDispatch()


    const increasQuantity = (id, quantity, stock) => {
        alert("this is increase")
        const newQty = quantity + 1;
        if (stock <= quantity) {
            return;
        }
        dispatch(addItemsToCart(id, newQty))
    }



    const decreseQuantity = (id, quantity) => {
        const newQty = quantity -1 ;
        if(quantity <= 1){
            return ;
        }
        dispatch(addItemsToCart(id, newQty))
    }

    const deleteCartItems = (id)=>{
        console.log(id)
        dispatch(remoteItemsFromCart(id))
    }

    return (
        <div >
            <div className='flex mb-3'>
                <div className='w-32 h-36'>
                    <img src="fdsafd" alt="hello" />
                </div>
                <div className='w-36'>
                    <h1 className='font-bold text-xl'>{item.name}</h1>
                    <p className='font-semibold text-lg'>Price : ₹{item.price}</p>
                    <div className='flex mt-2 mb-3'>
                        <button onClick={()=>decreseQuantity(item.product, item.quantity)} className='w-5 h-8 bg-black text-white flex justify-center items-center font-bold'>-</button>
                        <span className='w-8 h-8 border flex justify-center items-center font-bold'>{item.quantity}</span>
                        <button onClick={()=>increasQuantity(item.product, item.quantity, item.stock)} className='w-5 h-8 bg-black text-white flex justify-center items-center font-bold'>+</button>
                    </div>
                    <div className='flex mt-1'>
                        <button className=' text-red-800 font-bold flex justify-center items-center rounded-3xl py-1 text-sm hover:text-red-200' onClick={()=>deleteCartItems(item.product)}>Remove</button>
                    </div>
                </div>
                <div >
                    <p className='font-semibold text-lg'>Subtotal: ₹{item.price * item.quantity}</p>

                </div>

            </div>
        </div>
    )
}

export default CartItem
