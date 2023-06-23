import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import Nav from './components/Nav';
import AppRoutes from './router/AppRoutes';
import { PizzasProvider } from './context/PizzasContext';
function App() {
  return (
    <div className="App">
      <PizzasProvider>
        <Router>
          <Nav />
          <AppRoutes />
        </Router>
      </PizzasProvider>

    </div>
  );
}

export default App;
