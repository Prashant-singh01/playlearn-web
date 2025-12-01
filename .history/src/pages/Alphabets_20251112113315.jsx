export default function Alphabets() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-sky-500 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold mb-8">🔤 Learn Alphabets!</h1>
      <div className="grid grid-cols-6 gap-4">
        {letters.map((letter) => (
          <div
            key={letter}
            className="bg-white text-indigo-600 w-16 h-16 flex items-center justify-center text-2xl font-bold rounded-lg shadow-md hover:bg-indigo-600 hover:text-white transition-all duration-300"
          >
            {letter}
          </div>
        ))}
      </div>
    </div>
  );
}
