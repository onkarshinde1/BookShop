import React from "react";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import { Routes, Route } from "react-router-dom";
// import Signup from "./components/Signup";


const NotFound = () => (
  <div className="flex items-center justify-center h-screen text-3xl font-bold">
    404 – Page Not Found
  </div>
);

const App = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses/>} />
        {/* <Route path="/signup" element={<Signup/>} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
