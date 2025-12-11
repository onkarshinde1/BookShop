import React from "react";

const Aboutpage = () => {
  return (
    <div className="max-w-screen-3xl mx-auto md:px-20 px-4 mt-24 mb-16">
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">About BookNest</h1>
        <p className="text-gray-600 mt-2">
          Welcome to your personal digital bookshelf – a place to explore, learn,
          and grow with handpicked books.
        </p>
      </div>

      {/* Intro Section */}
      <div className="bg-white shadow-md rounded-2xl p-6 md:p-8 mb-8">
        <h2 className="text-xl font-semibold mb-3">What is this platform?</h2>
        <p className="text-gray-700 leading-relaxed">
          This web app is a simple and clean bookstore-style platform where you
          can browse{" "}
          <span className="font-semibold">self–help, finance, motivation, psychology, business</span>{" "}
          and many more categories. Some books are completely{" "}
          <span className="font-semibold text-green-600">free</span>, while
          others are <span className="font-semibold text-pink-500">paid</span>,
          so you can quickly see what fits your needs and budget.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow-sm border rounded-xl p-5">
          <h3 className="text-lg font-semibold mb-2">Simple UI</h3>
          <p className="text-gray-700 text-sm">
            Clean cards, clear typography and a distraction–free layout built
            with Tailwind CSS so users can focus on reading and exploring books.
          </p>
        </div>

        <div className="bg-white shadow-sm border rounded-xl p-5">
          <h3 className="text-lg font-semibold mb-2">Free & Paid Books</h3>
          <p className="text-gray-700 text-sm">
            The book list clearly shows which titles are free and which are paid,
            helping users quickly discover what they can start with instantly.
          </p>
        </div>

        <div className="bg-white shadow-sm border rounded-xl p-5">
          <h3 className="text-lg font-semibold mb-2">Auth Ready</h3>
          <p className="text-gray-700 text-sm">
            Signup and Login modals are designed to be simple and ready to
            connect with any backend or authentication service in the future.
          </p>
        </div>
      </div>

      {/* How it works */}
      <div className="bg-white shadow-md rounded-2xl p-6 md:p-8">
        <h2 className="text-xl font-semibold mb-3">How it works</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm md:text-base">
          <li>Browse the curated list of books from different categories.</li>
          <li>
            Use the navigation (Home, Courses / Books, Contact, About) to move
            around the app easily.
          </li>
          <li>
            Create an account using the <span className="font-semibold">Signup</span>{" "}
            form and access the <span className="font-semibold">Login</span> modal
            whenever you return.
          </li>
          <li>
            Use the contact form to share feedback, suggestions, or any issue you
            face while using the site.
          </li>
        </ol>
      </div>

      {/* Small footer note */}
      <p className="text-xs text-gray-500 mt-6">
        This project is built as a learning and practice platform using React,
        React Router, Tailwind CSS, and basic UI components.
      </p>
    </div>
  );
};

export default Aboutpage;
