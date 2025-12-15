import React from "react";
import BookCard from "./BookCard";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Cource = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:2411/book");
        const data = res.data.filter((data) => data.mode === "paid");
        setBook(data);
        console.log(data); 
      } catch (error) {
        console.log("Error :", error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-3xl container mx-auto md:px-20 px-4">
        <div className="mt-15 items-center justify-center text-center">
          <h1 className="text-2xl pt-20 md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-400">Here! :)</span>
          </h1>
          <p className="mt-10">
            “Discover our exclusive collection of premium books curated for
            passionate readers. Each paid title delivers high-value content,
            expert insights, and immersive storytelling. Unlock access to
            top-rated authors, advanced learning resources, and must-read
            bestsellers that elevate your reading experience. Invest in
            knowledge and upgrade your library with our finest selections.”
          </p>
          <Link to="/">
            <button className="btn btn-secondary mt-8">Back</button>
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {Array.isArray(book) &&
            book.map((item, index) => (
              <BookCard
                key={index}
                image={item.image}
                name={item.name}
                category={item.category}
                description={item.description}
                price={item.price}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Cource;
