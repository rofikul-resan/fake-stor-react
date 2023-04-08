import React from "react";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { Outlet } from "react-router-dom";

const App = () => {
  // const [Shop, setShop] = useState("");

  function pageController(p) {}
  return (
    <div>
      <Header control={pageController}></Header>
      <Outlet />
    </div>
  );
};

export default App;
