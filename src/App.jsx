import React from "react";
import SearchPage from "./components/SearchPage.jsx";
import {HashRouter, Routes, Route} from "react-router-dom";
import PropertyDetails from "./components/PropertyDetails.jsx";
import "./App.css";


function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<SearchPage />} />
                <Route path="/property/:id" element={<PropertyDetails />} />
            </Routes>
        </HashRouter>
    );
}

export default App;