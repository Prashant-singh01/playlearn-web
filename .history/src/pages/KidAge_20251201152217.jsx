import { useNavigate } from "react-router-dom";

export default function KidAge() {
  const navigate = useNavigate();

  function choose(age) {
    try {
      localStorage.setItem("playlearn_ageGroup", age);
    } catch (e) {
      console.warn("localStorage not available", e);
    }

    if (age === "2-4") navigate("/kid-2-4");
    else navigate("/kid-5-6");
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-200 to-green-400 text-gray-900">
      <h2 className="text-3xl font-bold mb-8">Choose Age Group</h2>

      <div className="flex flex-col sm:flex-row gap-6">
        <button
          onClick={() => choose("2-4")}
          className="w-64 h-40 bg-white rounded-3xl shadow-lg flex flex-col items-center justify-center text-2xl font-semibold hover:scale-105 transition-transform"
        >
          <div className="text-5xl">🧸</div>
          <div className="mt-2">Ages 2–4</div>
        </button>

        <button
          onClick={() => choose("5-6")}
          className="w-64 h-40 bg-white rounded-3xl shadow-lg flex flex-col items-center justify-center text-2xl font-semibold hover:scale-105 transition-transform"
        >
          <div className="text-5xl">🧩</div>
          <div className="mt-2">Ages 5–6</div>
        </button>
      </div>
    </div>
  );
}
