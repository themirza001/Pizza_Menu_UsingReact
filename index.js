import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 80,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 100,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 120,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 150,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 150,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 180,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>Mirza's Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  const pizzaNum = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaNum > 0 ? (
        <>
          <p>
            We Offer authentic French taste with Indian touch,Come and fall in
            love With Mirza's Pizza:)
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're Still Working on Our Menu,Please Come back later</p>
      )}
      ;
    </main>
  );
}
function Pizza({ pizzaObj }) {
  const isSoldOut = pizzaObj.soldOut;
  return (
    <li className={`pizza ${isSoldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h3>{pizzaObj.name} </h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{isSoldOut ? "SOLD OUT" : "INR " + pizzaObj.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  var hour = new Date().getHours();
  console.log(hour);
  const openHour = 0;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOpen && <Order closeHours={closeHour} />}
    </footer>
  );
}
function Order(props) {
  return (
    <div className="order">
      <p>
        We're open untill {props.closeHours}:00.Come Visit Us or Order Online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
