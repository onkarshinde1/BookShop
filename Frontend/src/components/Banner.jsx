import React from "react";
import Banner1 from '../../public/bannerphoto.jpg'

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-3xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-5">
        <div className="w-full order-2 md:order-1 md:w-[50%] mt-12 md:mt-25">
          <div className="space-y-10">
            <h1 className="text-4xl md:text-3xl font-bold ">
              Hello, Welcomes here to learn <br />
              something <span className="text-pink-400">new everyday..!</span>
            </h1>
            <p className="text-[17px]">
              Step into a world where every page opens a new door. Discover
              stories that spark ideas and fuel your dreams. Find your next
              great read — your mind deserves it!
            </p>
            <label className="input validator outline-none w-full z-0">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required />
            </label>

          </div>
            <button className="btn btn-secondary mt-8">Contact..!!</button>
          <div className="validator-hint hidden">Enter valid email address</div>
        </div>
        <div className="w-full order-1 md:w-[50%]">
            <img src={Banner1} alt="banner" className="w-110 h-110 md:my-10 md:mx-20" />
        </div>
      </div>
    </>
  );
};

export default Banner;
