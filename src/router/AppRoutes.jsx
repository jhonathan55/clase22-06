import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Cart from '../pages/Cart';
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            
        </Routes>
    )
}
export default AppRoutes;   