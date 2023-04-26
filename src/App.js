import React from 'react';
import './App.css';
import HomeScreen from './Screen/HomeScreen';
import LoginScreen from './Screen/LoginScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const user = null;
  return (
    <div className="app">

      <BrowserRouter>
      {!user ? (<LoginScreen status = "working on..."/>):
        (<Routes>
         
             (<Route path="/" element={<HomeScreen />}
            />)

        </Routes>)}
      </BrowserRouter>

    </div>
  );
}

export default App;