import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./common/Footer";
import Menu from "./common/Menu";
import Contador from "./Contador";

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Contador></Contador>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
