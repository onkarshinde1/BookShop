import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Dark mode wrapper for whole page */}
      <div className="min-h-screen bg-white text-black dark:bg-slate-900 dark:text-white pt-20">
        <Banner />
        <Freebook />
      </div>

      <Footer />
    </>
  );
};

export default Home;
