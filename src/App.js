import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Checkout from "./Components/Checkout";
import Item from "./Components/Item";
import { useState } from "react";
const PRODUCTS = [
  {
    name: "Apple",
    description: "Delicious apple",
    image: "/apple.jpg",
    price: 2000000,
    vat: 10,
    quantity: 12,
  },
  {
    name: "Milk",
    description: "Description for milk",
    image: "/milk.jpg",
    vat: 10,
    price: 4000000,
    quantity: 15,
  },
];

function App() {

  let [products, setProducts] = useState(PRODUCTS)
  let items = [];
  let totalItems = 0;
  let subtotal= 0;

  for (let i = 0; i < products.length; i++) {
    items.push(
      <Item
        key={products[i].name}
        name={products[i].name}
        description={products[i].description}
        src={products[i].image}
        vat={products[i].vat}
        price={products[i].price}
        quantity={products[i].quantity}
        onRemoveProduct = {onRemoveProduct}
      />
    );
    totalItems += products[i].quantity;
    subtotal +=products[i].price * products[i].quantity;
  }


  function onRemoveProduct(name) {
    alert(name);
    products = products.filter(product => {
      return product.name !== name;
    },[]);
    console.log(products);

    setProducts(
      products
    )
    
  }
  return (
    <div>
      <Header totalItems={totalItems}></Header>
      <section className="container">
        <ul className="products">{items}</ul>
      </section>
      <Checkout Subtotal = {subtotal}/>
      {/* <button onClick={onRemoveProduct}>Fake remove</button> */}
    </div>
  );
}

export default App;
