import React from "react";
import BookCard from "../components/BookCard";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Freebook = () => {
   const [book, setBook] = useState([]);
    useEffect(() => {
      const getBook = async () => {
        try {
          const res = await axios.get("http://localhost:2411/book");
          const data = res.data.filter((data) => data.mode === "free");
        setBook(data);
        console.log(data)
        } catch (error) {
          console.log("Error :", error);
        }
      };
      getBook();
    }, []);

  return (
    <>
      <div className="max-w-screen-3xl mx-auto md:px-20 px-4 mt-6 mb-6">
        <h1 className="text-xl font-semibold py-2">Free Offered Books</h1>
        <p className="text-gray-600">
          Explore our collection of free books to start reading today.
        </p>
      </div>

      <div className="px-4 md:px-20 mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {book.map((item, index) => (
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
    </>
  );
};

export default Freebook;
