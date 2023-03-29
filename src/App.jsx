import React from "react";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";

const App = () => {
  // const [Shop, setShop] = useState("");

  function pageController(p) {
    console.log(p.target.href.pathname);
    console.log(location.pathname);
  }
  return (
    <div>
      <Header control={pageController}></Header>
      <Shop></Shop>
    </div>
  );
};

export default App;
