import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Cart from './components/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div>
        <Routes>
          <Route path='/' exact element={<Home></Home>}></Route>
          <Route path='/cart' exact element={<Cart></Cart>}> </Route>
        </Routes>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
