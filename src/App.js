
import "./cssGlobal/styles.css";
import PseudoBody from "./components/General/PseudoBody";
import HeaderContainer from "./components/Header/HeaderContainer";
import SectionRegisterForm from "./components/Section/Register/SectionRegisterForm";
import SectionLoginForm from "./components/Section/Register/SectionLoginForm";
import SectionProductPanel from "./components/Section/Products/SectionProductPanel";
import ProductsList from "./components/Section/ProductsList/ProductsList";
import Footer from "./components/Footer/Footer";
import React from "react";

import { Route, Routes } from "react-router-dom";
function App() {
  

  return (
    <PseudoBody>
      <HeaderContainer></HeaderContainer>
      <Routes>
        <Route path="/" Component={ProductsList} />
        <Route path="/TPO_UTN_MOD2_U3" Component={ProductsList} />
        <Route path="/productslist" Component={ProductsList} />
        <Route path="/home" Component={ProductsList}></Route>
        <Route path="/verproducto/:id" Component={SectionProductPanel} />
        <Route path="/registrarse" Component={SectionRegisterForm}></Route>
        <Route path="/ingresar" Component={SectionLoginForm}></Route>
      </Routes>
      <Footer></Footer>
    </PseudoBody>
  );
}

export default App;
