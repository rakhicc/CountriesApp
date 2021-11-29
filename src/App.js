import "./App.css";

import React from "react";
import CountriesList from "./components/CountriesList";
import Home from "./components/Home";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import Header from "./components/Header";
import CountrySingle from "./components/CountrySingle";

const RouteWrapper = (props) => {
  const params = useParams();
  return <CountrySingle params={params} {...props} />;
};
const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/countries">Countries</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/countries" element={<CountriesList />}></Route>
        <Route path="/countries/:name" element={<RouteWrapper />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
