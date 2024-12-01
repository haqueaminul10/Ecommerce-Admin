import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './Components/home';
import Page from './Components/home/page';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/page' element={<Page />} />
      </Routes>
    </>
  );
}

export default App;
