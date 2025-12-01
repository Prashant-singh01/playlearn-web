import { useNavigate } from "react-router-dom";

export default function Kid5to6() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-indigo-100 text-gray-800">
      <h2 className="text-3xl font-bold mb-4">Ages 5–6 — Coming Soon</h2>
      <p className="mb-6 max-w-lg text-center">
        We will build the 5–6 learning module next. For now you can continue with
        the 2–4 activities.
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => navigate("/kid-2-4")}
          className="px-6 py-3 bg-white rounded-lg shadow"
        >
          Open 2–4 Modules
        </button>

        <button
          onClick={() => navigate("/select")}
          className="px-6 py-3 bg-white rounded-lg shadow"
        >
          Back to Role Select
        </button>
      </div>
    </div>
  );
}
