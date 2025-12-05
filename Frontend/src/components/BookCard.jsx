import React from "react";

const BookCard = ({ image, name, category, description,price }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition hover:scale-105 duration-200">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-lg"
      />

      <h2 className="text-lg font-semibold mt-3">{name}</h2>
      <p className="text-gray-500 text-sm">{category}</p>

      <p className="text-gray-500 text-[10px] mt-1">
        {description}
      </p>
      <div className="card-actions justify-between mt-2">
        <div className="badge badge-outline">${price}</div>
        <div className="badge badge-outline hover:bg-pink-500 hover:text-white cursor-pointer duration-300">BuyNow</div>
      </div>
    </div>
  );
};

export default BookCard;
