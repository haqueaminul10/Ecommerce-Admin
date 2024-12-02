import './App.css';

import { Routes, Route } from 'react-router-dom';
import Dashboard from './Components/home/index';

import User from './Components/pages/user';
import ProductList from './Components/pages/product/productList';
import AddProduct from './Components/pages/product/addProduct';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/product/list' element={<ProductList />} />
        <Route path='/products/add' element={<AddProduct />} />
        <Route path='/user' element={<User />} />
      </Routes>
    </>
  );
}

export default App;
