import './App.css';
import Navbar from './Components/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import New from './Components/new';
import Home from './Components/home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
