import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./component/Banner";

import FooterPage from "./pages/FooterPage";
import NavPage from "./pages/NavPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <>
    <BrowserRouter>
      <NavPage />
      <Banner />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:product" element={<ProductPage/>} />
      </Routes>
      
      <FooterPage />
      </BrowserRouter>
    </>
  );
}

export default App;
