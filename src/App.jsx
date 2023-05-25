import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Details from './Pages/Details';
import NoPage from './Pages/NoPage';
import Cart from './Pages/Cart.jsx';
import DataProvider from './Context/ConversoContext';
//import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;