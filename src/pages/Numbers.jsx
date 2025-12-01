import React, { useState } from "react";

const numbers = [
  { num: 1, word: "One" },
  { num: 2, word: "Two" },
  { num: 3, word: "Three" },
  { num: 4, word: "Four" },
  { num: 5, word: "Five" },
  { num: 6, word: "Six" },
  { num: 7, word: "Seven" },
  { num: 8, word: "Eight" },
  { num: 9, word: "Nine" },
  { num: 10, word: "Ten" },
];

export default function Numbers() {
  const [activeNum, setActiveNum] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);

  const handleClick = (num) => {
    setFadeIn(false);
    setActiveNum(num);

    setTimeout(() => setFadeIn(true), 50); // fade animation

    // play sound after image shows
    setTimeout(() => {
      const audio = new Audio(`/sounds-numbers/${num}.mp3`);
      audio.play().catch(() => console.log(`❌ Sound missing for number ${num}`));
    }, 600);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 text-white p-4">
      
      <h1 className="text-5xl font-extrabold mb-8 drop-shadow-lg animate-bounce">
        🔢 Learn Numbers!
      </h1>

      {/* Image Display */}
      <div className="flex flex-col items-center justify-center mb-8 min-h-[250px]">
        {activeNum ? (
          <div
            className={`flex flex-col items-center transition-all duration-700 ${
              fadeIn ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <img
              src={`/images-numbers/${activeNum}.png`}
              alt={activeNum}
              className="w-48 h-48 rounded-2xl shadow-2xl object-contain"
            />
            <p className="mt-4 text-3xl font-semibold">
              {activeNum} — {numbers.find((n) => n.num === activeNum)?.word}
            </p>
          </div>
        ) : (
          <p className="italic text-white/80 text-xl">
            Tap a number to start learning ✨
          </p>
        )}
      </div>

      {/* Number Buttons */}
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
        {numbers.map(({ num, word }) => (
          <button
            key={num}
            onClick={() => handleClick(num)}
            className={`${
              activeNum === num
                ? "bg-blue-300 text-blue-800 scale-110"
                : "bg-white text-orange-700"
            } font-bold text-2xl py-4 px-6 rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-all duration-200`}
          >
            {num}
            <p className="text-xs text-gray-700 mt-1">{word}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
