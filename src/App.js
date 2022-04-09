import React, { useState, useEffect } from "react";
// import Header from "./Components/Header/Header";
import ProductList from "./Components/ProductsList/ProductList";
import axios from 'axios'

const App = () => {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    getProducts();
  }, [])
  
  const getProducts = () => {
    axios.get("https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/products")
    .then(res => {
      setProducts(res.data)
    })
  }
  return (
    <div className="container">
      {/* <Header/> */}
      <ProductList title={"Новинки"} products={products.filter(product => product.status === 'new')}/>
      <ProductList title={"Выбор покупателей"} span={<span onClick={() => setShow(!show)}>{!show ? "Смотреть все" : "Скрыть"}</span>} 
      products={!show ? products?.slice(0, 6) : products}/>
    </div>
  )
}
export default App;
