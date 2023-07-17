import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import Converter from "./components/Converter/Converter";
import CurrentCurrencies from "./components/CurrentCurrencies/CurrentCurrencies";

function App() {
  return (
    <Layout>
        <Routes>
            <Route path="/convert-currency" element={<Converter/>}/>
            <Route path="/current-currencies" element={<CurrentCurrencies/>}/>
        </Routes>
    </Layout>
  );
}

export default App;
