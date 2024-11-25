import { Fragment, useState } from "react";
import React from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div>
      <Fragment>
        <Header onShowCart={showCartHandler} />
        <main>
          <Meals />
        </main>
      </Fragment>
    </div>
  );
}

export default App;
