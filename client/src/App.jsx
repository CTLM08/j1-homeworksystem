import React, { createContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import Login from "./pages/login";
import Footer from "./components/Footer";
import Register from "./pages/login/register";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import LogOut from "./pages/logout";
import Admin from "./pages/admin";
import AddHomeWork from "./pages/AddHomeWork";
import Readmore from "./pages/Readmore";
import Students from "./pages/Students";

export const appContext = createContext({
  navigate: () => {},
  user: null,
  userData: {},
  userUid: "",
});
const App = () => {
  const [userData, setUserData] = useState({});
  const [user, setUser] = useState(null);
  const [userUid, setUserUid] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (_user) => {
      if (_user) {
        setUser(_user);
        setUserUid(_user.uid);
        getDoc(doc(firestore, "user", _user.uid)).then((_doc) => {
          setUserData(_doc.data());
        });
        navigate("/");
        console.log(_user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <appContext.Provider
      value={{
        navigate,
        user,
        userData,
        userUid,
      }}
    >
      <div className="min-h-screen w-full bg-zinc-900 flex flex-col relative">
        <Navbar />
        <main className="mt-16 flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/addhomework" element={<AddHomeWork />} />
            <Route path="/homework/:id" element={<Readmore />} />
            <Route path='/Students' element={<Students /> }/>
          </Routes>
        </main>
        <Footer />
      </div>
    </appContext.Provider>
  );
};

export default App;
