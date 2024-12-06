import React from "react";
import Nivelacion from "./Nivelacion";
import Fisica101 from "./Fisica101/Fisica101";
import Error404 from "./Fisica101/Error404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nivelacion />}></Route>
          <Route path="/fisica101" element={<Fisica101 />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
