import { createContext, useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

export const PizzasContext = createContext();
export const PizzasProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);
    const [cart, setCart] = useState([]);

    const { data, loading, error } = useFetch('/pizzas.json');
    console.log(data);
    useEffect(() => {
        if (data) {
            setPizzas(data);
        }
    }, [data]);
    const addToCart = (pizza) => {
        const findProductIndex = cart.findIndex((item) => item.id === pizza.id);
        const pruduct = {
            id: pizza.id,
            name: pizza.name,
            price: pizza.price,
            count: 1,
            desc: pizza.desc,
            img: pizza.img
        }
        if (findProductIndex >= 0) {
            cart[findProductIndex].count++;
            setCart([...cart]);
        } else {
            setCart([...cart, pruduct]);
        }
    }
    const increment = (index) => {
        cart[index].count++;
        setCart([...cart]);
    }
    const decrement = (index) => {
        if (cart[index].count === 1) {
            cart.splice(index, 1);
        } else {
            cart[index].count--;
        }
        setCart([...cart]);
    }
    const total = cart.reduce((acc, item) => acc + (item.price * item.count), 0);

    const PizzasProviderValues={
        pizzas,
        cart,
        loading,
        setCart,
        addToCart,
        increment,
        decrement,
        total
    }

    return (
        <PizzasContext.Provider value={PizzasProviderValues}>
            {children}
        </PizzasContext.Provider>
    )

}