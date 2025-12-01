import React from "react";
import { Link } from "react-router-dom";


function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">

      {/* Welcome Text */}
      <h1 className="text-4xl font-bold text-blue-600 mb-10">
        Welcome to PlayLearn! 🎉
      </h1>

      {/* Navigation Buttons */}
      <div className="flex flex-col gap-4">
        <Link
          to="/home"
          className="bg-blue-500 text-white px-6 py-3 rounded-xl text-xl font-semibold hover:bg-blue-600"
        >
          Kid Home
        </Link>

        <Link
          to="/alphabets"
          className="bg-purple-500 text-white px-6 py-3 rounded-xl text-xl font-semibold hover:bg-purple-600"
        >
          Learn Alphabets
        </Link>

        <Link
          to="/numbers"
          className="bg-green-500 text-white px-6 py-3 rounded-xl text-xl font-semibold hover:bg-green-600"
        >
          Learn Numbers
        </Link>
      </div>
    </div>
  );
}

export default App;
