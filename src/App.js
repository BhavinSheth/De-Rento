import "./index.css";

import { useEffect, useLayoutEffect, useState } from "react";
import Loading from "./loading";
import Nav from "./components/navbar/nav";
import Home from "./components/home/home";
import Sell from "./components/sell/sell";
import Divider from "./components/divider/divider";
import Buy from "./components/buy/buy";
// import Profile from "./components/profile/Profile";

function App() {
  const [loading, setloading] = useState(false);

  if (loading)
    return (
      <main>
        <Loading />
      </main>
    );
  else {
    return (
      <div className="app">
        <Nav />
        <Home />
        <Buy />
        <Sell />
        {/* <Divider /> */}
        {/* <Profile /> */}
      </div>
    );
  }
}

export default App;
