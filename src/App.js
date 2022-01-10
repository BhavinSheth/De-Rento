import "./index.css";
import { useEffect, useLayoutEffect, useState } from "react";
import Loading from "./loading";
import Nav from "./components/navbar/nav";

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
      </div>
    );
  }
}

export default App;
