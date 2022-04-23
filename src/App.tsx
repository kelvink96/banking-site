import React from 'react';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import "primeflex/primeflex.css";                                //icons
import {Route, Routes } from 'react-router-dom';
import {DashboardPage, LandingPage} from "./views";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/home" element={<DashboardPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
