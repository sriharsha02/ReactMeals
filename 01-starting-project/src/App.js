import React from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
function App() {
  return (
    <div>
      <React.Fragment>
        <Header />
        <main>
          <Meals />
        </main>
      </React.Fragment>
    </div>
  );
}

export default App;
