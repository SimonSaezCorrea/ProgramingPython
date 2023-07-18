import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainComponent from "./components/MainComponent";
import TestComponent from "./components/TestComponent";

function App() {
    return (
        <div>
            <Router>
                  <Routes>
                      <Route path="/home" element={<MainComponent />} />
                      <Route path="/test" element={<TestComponent />} />
                  </Routes>
            </Router>
        </div>
    );
}

export default App;
