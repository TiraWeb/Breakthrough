import React from 'react';
import Home from './Home';
import Content from './Content.tsx';
import Sign from './Sign.tsx';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/content/*" element={<Content/>}/>
                    <Route path="/sign/*" element={<Sign/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
