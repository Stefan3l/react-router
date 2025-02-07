import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Layouts
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Contatti from "./pages/Contatti";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route index Component={HomePage} />
          <Route path="/about-us" Component={AboutUs} />
          <Route path="/contatti" Component={Contatti} />
        </Route>
        <Route path="*" Component={PageNotFound} />
      </Routes>
    </BrowserRouter>
  );
}
