import { Link } from "react-router-dom";

export default function KidHome() {
  const topics = [
    { name: "Alphabets", color: "bg-pink-500", link: "/alphabets" },
    { name: "Numbers", color: "bg-blue-500", link: "#" },
    { name: "Colors", color: "bg-green-500", link: "#" },
    { name: "Shapes", color: "bg-yellow-500", link: "#" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <h1 className="text-5xl font-extrabold mb-6 animate-bounce">🎨 Let’s Learn!</h1>
      <p className="text-lg mb-10 italic">Tap a topic to start learning ✨</p>

      <div className="grid grid-cols-2 gap-6">
        {topics.map((topic) => (
          <Link
            key={topic.name}
            to={topic.link}
            className={`${topic.color} hover:scale-110 transition-transform shadow-lg rounded-xl px-6 py-3 text-xl font-semibold text-center`}
          >
            {topic.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
