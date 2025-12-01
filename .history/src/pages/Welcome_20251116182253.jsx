import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-400 to-purple-500 text-white">
      <h1 className="text-5xl font-bold mb-10 drop-shadow-lg">
        Welcome to PlayLearn
      </h1>

      <button
        onClick={() => navigate("/select")}
        className="px-10 py-4 bg-white text-purple-600 text-xl rounded-2xl shadow-lg hover:scale-105 transition-transform"
      >
        Click to Enter
      </button>
    </div>
  );
}
