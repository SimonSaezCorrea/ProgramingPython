import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainComponent from "./components/MainComponent";
import TestComponent from "./components/TestComponent";
import TestSucefullComponent from "./components/TestSucefullComponent";
import CreateQuestComponent from "./components/CreateQuestComponent"
import Test from "./components/Test";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<MainComponent />} />
                    <Route path="/home" element={<MainComponent />} />
                    <Route path="/test/:difficulty" element={<TestComponent />} />
                    <Route path="/test/sucefull/:testComoTexto" element={<TestSucefullComponent />} />
                    <Route path="/create/test" element={<CreateQuestComponent />} />
                    <Route path="/test_cosita/:test" element={<Test />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
