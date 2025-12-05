import React from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";

const Courses = () => {
  return (
    <>
      <Navbar />

      {/* Main wrapper must have dark/light styles */}
      <div className="min-h-screen bg-white text-black dark:bg-slate-900 dark:text-white pt-20">
        <Course />
      </div>

      <Footer />
    </>
  );
};

export default Courses;
