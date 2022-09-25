import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Photos from "./components/Photos";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Photos />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
