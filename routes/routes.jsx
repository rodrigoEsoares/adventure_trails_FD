import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import Cadastro from "../src/pages/Cadastro";
import Lista from "../src/pages/Lista";
import Layout from "../src/pages/Layout/Index";
import PageNotFound from "../src/pages/PageNotFound";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/lista" element={<Lista />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
