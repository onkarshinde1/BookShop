import React from 'react'
import list from '../data/list.json'
import BookCard from './BookCard';
import { Link } from 'react-router-dom';

const Cource = () => {
  const filterData = list.filter((data) => data.mode === "paid");
  return (
    <>
    <div className='max-w-screen-3xl container mx-auto md:px-20 px-4'>
      <div className='mt-15 items-center justify-center text-center'>
        <h1 className='text-2xl pt-20 md:text-4xl'>We're delighted to have you <span className="text-pink-400">Here! :)</span></h1>
        <p className='mt-10'>“Discover our exclusive collection of premium books curated for passionate readers. Each paid title delivers high-value content, expert insights, and immersive storytelling. Unlock access to top-rated authors, advanced learning resources, and must-read bestsellers that elevate your reading experience. Invest in knowledge and upgrade your library with our finest selections.”</p>
        <Link to="/">
        <button className="btn btn-secondary mt-8">Back</button>
        </Link>
      </div>
      <div className=' mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
        {
          filterData.map((item , index)=>(
            <BookCard 
            key={index}
            image={item.image}
            name={item.name}
            category={item.category}
            description={item.description}
            price={item.price}/>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default Cource;
