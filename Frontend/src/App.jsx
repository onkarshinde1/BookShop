import React from "react";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import About from "./components/About";
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthContext";


const NotFound = () => (
  <div className="flex items-center justify-center h-screen text-3xl font-bold">
    404 – Page Not Found
  </div>
);

const App = () => {
  const[authUser , setAuthUser] = useAuth();
    console.log(authUser);
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser?<Courses/> :<Navigate to="/signup"/>}  />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
