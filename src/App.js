import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./EcomwebSite/Navbar/NavBar";
import Product from "./EcomwebSite/Products/Product";
import Cart from "./EcomwebSite/CartPage/Cart";
import Details from "./EcomwebSite/DEtails/Details";
import Orders from "./EcomwebSite/PlaceOrder/Orders";
import Footer from "./EcomwebSite/Footer";
import Notfound from "./EcomwebSite/Notfound";
import Delivery from "./EcomwebSite/PaymentGate/Delivery";
import { EcomProvider } from "./EcomContext/EcomContext";
const App = () => {
  return (
    <EcomProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/delivery/:id" element={<Delivery />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </EcomProvider>
  );
};

export default App;
