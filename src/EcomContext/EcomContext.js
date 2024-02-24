import { createContext, useContext, useEffect, useState } from "react";
const EcomContext = createContext();

const EcomProvider = ({ children }) => {
  const [alldata, setalldata] = useState([]);
  const [data, SetData] = useState([]);
  const [cart, SetCart] = useState([]);
  const [order, setOrder] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    const data = async () => {
      const poduct = await fetch("https://dummyjson.com/products");
      const data = await poduct.json();
      const productsdetails = data.products;
      SetData(productsdetails);
      setloading(false);
    };
    data();
  }, []);

  const handleCart = (id) => {
    window.alert("YOUR PRODUCT IS ADDED");
    const find = data.find((each) => each.id == id);
    SetCart([...cart, find]);
    if (cart.length >= 1) {
      const filter = cart.filter((each) => each.id !== id);
      SetCart([...filter, find]);
    }
  };
  const handleDelete = (id) => {
    const filter = cart.filter((each) => each.id !== id);
    SetCart(filter);
  };
  const handleplaceOrder = (id) => {
    const find = data.find((each) => each.id === id);
    setOrder([...order, find]);
    const filter = cart.filter((each) => each.id !== id);
    SetCart(filter);
  };
  return (
    <EcomContext.Provider
      value={{
        alldata,
        setalldata,
        data,
        SetData,
        cart,
        SetCart,
        order,
        setOrder,
        loading,
        setloading,
        handleCart,
        handleDelete,
        handleplaceOrder,
      }}
    >
      {children}
    </EcomContext.Provider>
  );
};

function useMydata() {
  const context = useContext(EcomContext);
  return context;
}

export { EcomProvider, useMydata };
