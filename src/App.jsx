import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./common/Footer";
import Menu from "./common/Menu";
import Contador from "./Contador";
import Nosotros from "./Nosotros";
import "./style.css";

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path="/" element={<Contador></Contador>}></Route>
        <Route exact path="/nosotros" element={<Nosotros></Nosotros>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
