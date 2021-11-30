import "./App.css";

import React from "react";
import CountriesList from "./components/CountriesList";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Header from "./components/Header";
import CountrySingle from "./components/CountrySingle";
import Footer from "./components/Footer";
const RouteWrapper = (props) => {
  const params = useParams();
  return <CountrySingle params={params} {...props} />;
};
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/countries" element={<CountriesList />}></Route>
        <Route path="/countries/:name" element={<RouteWrapper />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
