import { Login } from './pages/Login Page/Login';
import {Register} from './pages/Register Page/Register'
import { Landing } from './pages/Landing Page/Landing';
import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import { Home } from './pages/Home Page/Home';
import { Hero } from './pages/Landing Page/Main/Hero-section/Hero';
import { Contact } from './pages/Contact Page/Contact';
import { Reset } from './pages/Reset Password/Reset';
import { About } from './pages/About us Page/About';
import { AuthorsPage } from './pages/Authors Page/Authors-Page';
import { Checkout } from './pages/Checkout Page/Checkout';
import { QuotesPage } from './pages/Quotes Page/QuotesPage';
import { Cart } from './pages/Cart Page/Cart';

function App() {
   
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/about" element={<About />} />
          <Route path="/authors" element={<AuthorsPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/quotes" element={<QuotesPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
