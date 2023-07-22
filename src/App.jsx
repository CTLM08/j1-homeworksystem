import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import Login from "./pages/login";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="min-h-screen w-full bg-zinc-900 flex flex-col relative">
      <Navbar />
      <main className="mt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
