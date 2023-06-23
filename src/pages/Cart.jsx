import React, { useContext } from 'react';
import { PizzasContext } from '../context/PizzasContext';

const Cart = () => {
    const { cart, increment, decrement, total } = useContext(PizzasContext);
    return (
        <div className='container'>
            <h1>Cart total: {total}</h1>
            

            {cart.map((item, index) => (
                <div key={index}>
                    <div className='card mb-3'>
                        <div className='col-md-4' >
                            <img src={item.img} className='img-fluid' />
                        </div>
                        <h3 className='display-3'>{item.name}</h3>
                        <p>{item.price}</p>
                        <p>{item.desc}</p>
                        <div className='d-flex'>
                        <button className='btn btn-primary ms-2'  onClick={() => increment(index)}>+</button>
                        <span > {item.count}</span>
                        <button className='btn btn-primary ms-2' onClick={() => decrement(index)}>-</button>
                        </div>
                      
                    </div>

                </div>
            ))}

        </div>

    )
}
export default Cart;