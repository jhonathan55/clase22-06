import React, { useContext } from 'react';
import { PizzasContext } from '../context/PizzasContext';
import PizzaCard from '../components/PizzaCard';
const Home = () => {

    const { pizzas } = useContext(PizzasContext);
    return (
        <div className="">
            {pizzas && (
                <div className="row gy-2">
                    {pizzas.map((pizza) => (
                        <div className="col-sm-4" key={pizza.id}>
                            <PizzaCard pizza={pizza} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Home;