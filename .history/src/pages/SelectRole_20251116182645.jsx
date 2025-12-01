import { useNavigate } from "react-router-dom";

export default function SelectRole() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-yellow-200 to-yellow-400 text-gray-800">
      <h1 className="text-4xl font-bold mb-10 drop-shadow-md">
        Who is using PlayLearn?
      </h1>

      <div className="flex flex-col sm:flex-row gap-8">

        {/* Kid Card */}
        <div
          onClick={() => navigate("/kid-age")}
          className="cursor-pointer bg-white w-64 h-40 rounded-3xl shadow-xl flex flex-col justify-center items-center hover:scale-105 transition-transform"
        >
          <span className="text-5xl">👶</span>
          <span className="text-2xl font-semibold mt-2">Kid</span>
        </div>

        {/* Parent Card */}
        <div
          onClick={() => navigate("/parent-auth")}
          className="cursor-pointer bg-white w-64 h-40 rounded-3xl shadow-xl flex flex-col justify-center items-center hover:scale-105 transition-transform"
        >
          <span className="text-5xl">👨‍👩‍👧</span>
          <span className="text-2xl font-semibold mt-2">Parent</span>
        </div>

      </div>
    </div>
  );
}
