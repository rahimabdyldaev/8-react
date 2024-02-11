import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { MainMenu, MainPage } from "./Pages";
import './App.css'

const Loader = () => <div className="loader">...Загрузка</div>;
const Error = () => <div className="error">Ошибка! Пожалуйста, повторите попытку.</div>;

const EmptyBasketMessage = () => (
  <div className="empty-backet">Корзина пустая. Пожалуйста, добавьте что-то в корзину.</div>
);

const App = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [emptyBasket, setEmptyBasket] = useState(false);

  const simulateCase = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      if (isEmptyBasket()) {
        setEmptyBasket(true);
      } else {

      }
    }, 2000);
  };

  const isEmptyBasket = () => {
    return true;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>

      <div className="app">
        {loading && <Loader />}
        {error && <Error />}
        {emptyBasket && <EmptyBasketMessage />}
        <button onClick={simulateCase}>Добавить в корзину</button>
      </div>
    </Router>
  );
};

export default App;
