import React from "react";

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
  const playSound = (letter) => {
    const audio = new Audio(`/sounds/${letter}.mp3`);
    audio
      .play()
      .then(() => console.log(`🔊 Playing sound for ${letter}`))
      .catch(() => alert(`❌ Sound for ${letter} not found!`));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500 text-white">
      <h1 className="text-5xl font-extrabold mb-8 drop-shadow-lg animate-bounce">
        🎵 Learn Alphabets!
      </h1>

      <div className="grid grid-cols-4 sm:grid-cols-6 gap-4">
        {letters.map(({ letter, word }) => (
          <button
            key={letter}
            onClick={() => playSound(letter)}
            className="bg-white text-pink-600 font-bold text-2xl py-4 px-6 rounded-2xl shadow-lg hover:scale-105 hover:bg-pink-100 active:scale-95 transition-transform duration-200"
          >
            {letter}
            <p className="text-xs text-gray-600 mt-1 font-medium">{word}</p>
          </button>
        ))}
      </div>

      <p className="mt-10 text-lg italic text-white/90">
        Tap any letter to hear its sound 🎤
      </p>
    </div>
  );
}
