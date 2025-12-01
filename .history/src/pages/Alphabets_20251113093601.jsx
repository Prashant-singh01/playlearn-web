import React, { useState } from "react";

const letters = [
  { letter: "A", word: "Apple" },
  { letter: "B", word: "Ball" },
  { letter: "C", word: "Cat" },
  { letter: "D", word: "Dog" },
  { letter: "E", word: "Elephant" },
  { letter: "F", word: "Fish" },
  { letter: "G", word: "Goat" },
  { letter: "H", word: "Hat" },
  { letter: "I", word: "Ice Cream" },
  { letter: "J", word: "Juice" },
  { letter: "K", word: "Kite" },
  { letter: "L", word: "Lion" },
  { letter: "M", word: "Monkey" },
  { letter: "N", word: "Nest" },
  { letter: "O", word: "Orange" },
  { letter: "P", word: "Parrot" },
  { letter: "Q", word: "Queen" },
  { letter: "R", word: "Rabbit" },
  { letter: "S", word: "Sun" },
  { letter: "T", word: "Tree" },
  { letter: "U", word: "Umbrella" },
  { letter: "V", word: "Van" },
  { letter: "W", word: "Watch" },
  { letter: "X", word: "Xylophone" },
  { letter: "Y", word: "Yak" },
  { letter: "Z", word: "Zebra" },
];

export default function Alphabets() {
  const [activeLetter, setActiveLetter] = useState(null);
  const [fade, setFade] = useState(false);

  const handleClick = (letter) => {
    setFade(false);
    setActiveLetter(letter);

    // Fade animation reset
    setTimeout(() => setFade(true), 50);

    // Play sound after small delay (image first)
    setTimeout(() => {
      const audio = new Audio(`/sounds/${letter}.mp3`);
      audio
        .play()
        .then(() => console.log(`🔊 Playing ${letter}`))
        .catch(() => alert(`❌ Sound for ${letter} not found!`));
    }, 600);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500 text-white p-4">
      <h1 className="text-5xl font-extrabold mb-8 drop-shadow-lg animate-bounce">
        🎨 Learn Alphabets!
      </h1>

      {/* Image display */}
      <div className="flex flex-col items-center justify-center mb-8 min-h-[200px]">
        {activeLetter ? (
          <div
            className={`flex flex-col items-center transition-all duration-700 ${
              fade ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <img
              src={`/images/${activeLetter}.jpg`}
              alt={activeLetter}
              className="w-48 h-48 rounded-2xl shadow-2xl object-cover"
              onError={(e) => (e.target.style.display = "none")}
            />
            <p className="mt-4 text-3xl font-semibold">
              {activeLetter} for{" "}
              {letters.find((l) => l.letter === activeLetter)?.word}
            </p>
          </div>
        ) : (
          <p className="italic text-white/80">
            Tap a letter to start learning ✨
          </p>
        )}
      </div>

      {/* Alphabet buttons */}
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-4">
        {letters.map(({ letter, word }) => (
          <button
            key={letter}
            onClick={() => handleClick(letter)}
            className={`${
              activeLetter === letter
                ? "bg-yellow-300 text-pink-700 scale-110"
                : "bg-white text-pink-600"
            } font-bold text-2xl py-4 px-6 rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200`}
          >
            {letter}
            <p className="text-xs text-gray-700 mt-1 font-medium">{word}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
