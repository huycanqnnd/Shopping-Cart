/* eslint-disable array-callback-return */
import "./App.css";
import Header from "./Components/Header";
import Checkout from "./Components/Checkout";
import Item from "./Components/Item";
import Promotion from "./Components/Promotion";
import { useState } from "react";
import apple from "./image/apple.jpg";
import milk from "./image/milk.jpg";
import orange from "./image/orange.jpg";
import banana from "./image/banana.jpg";

const PRODUCTS = [
  {
    name: "Apple",
    description: "Delicious apple",
    image: apple,
    price: 200000,
    vat: 10,
    quantity: 15,
  },
  {
    name: "Milk",
    description: "Description for milk",
    image: milk,
    vat: 10,
    price: 400000,
    quantity: 10,
  },
  {
    name: "oranges",
    description: "Description for oranges",
    image: orange,
    vat: 10,
    price: 300000,
    quantity: 5,
  },
  {
    name: "banana",
    description: "Description for banana",
    image: banana,
    vat: 10,
    price: 250000,
    quantity: 10,
  },
];

const ListPromotions = [
  {
    code: "1",
    pecent: 10,
  },
  {
    code: "2",
    pecent: 20,
  },
  {
    code: "3",
    pecent: 30,
  },
  {
    code: "4",
    pecent: 40,
  },
  {
    code: "5",
    pecent: 50,
  },
];

function App() {
  let [products, setProducts] = useState(PRODUCTS);
  let [inputPromotion, setInputPromotion] = useState("");
  let [pecent, setPecent] = useState(0);

  let items = [];
  let totalItems = 0;
  let subtotal = 0;

  items = products.map((p) => {
    totalItems += p.quantity;
    subtotal += p.price * p.quantity;
    return (
      <Item
        key={p.name}
        name={p.name}
        description={p.description}
        src={p.image}
        vat={p.vat}
        price={p.price}
        quantity={p.quantity}
        onQuantityChanged={onQuantityChanged}
        onRemoveProduct={onRemoveProduct}
      />
    );
  });

  function onRemoveProduct(name) {
    products = products.filter((product) => {
      return product.name !== name;
    });

    setProducts(products);
  }

  function onApplyPromoCode() {

    let pro = ListPromotions.find((p) => {
      if (p.code === inputPromotion) {
        return p;
      }
    });

    if (pro) setPecent(pro.pecent);
    else setPecent(0);
  }

  function onQuantityChanged(newQuantity, productName) {
    const newProducts = products.map((product) => {
      if (product.name !== productName) {
        return product;
      }

      const newProduct = {
        ...product,
        quantity: parseInt(newQuantity),
      };

      return newProduct;
    });
    setProducts(newProducts);
  }

  return (
    <div>

      <div>
        <Header totalItems={totalItems}></Header>
        <section className="container">
          <ul className="products">{items}</ul>
        </section>
          <div className="promotion">
            <Promotion
              inputPromotion={inputPromotion}
              setInputPromotion={setInputPromotion}
              onApplyPromoCode={() => {
                onApplyPromoCode();
              }}
            ></Promotion>
          </div>
          <Checkout Subtotal={subtotal} pecent={pecent} />
      </div>
    </div>
  );
}

export default App;
