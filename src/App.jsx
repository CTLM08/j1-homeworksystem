import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import Login from "./pages/login";
const App = () => {
  return (
    <div className="h-screen w-full bg-zinc-900 flex flex-col overflow-y-auto">
      <Navbar />
      <div className="h-16"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
