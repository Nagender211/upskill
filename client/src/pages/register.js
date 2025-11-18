import React, { useState } from "react";
import { api } from "../utils/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!email.trim() || !password.trim()) {
      setError("Please enter email and password.");
      return;
    }

    setLoading(true);
    try {
      const res = await api.post("/register", { name, email, password });
      console.log("response data:", res.data);
      navigate("/login"); // use hook
    } catch (err) {
      console.error("signup error:", err);
      const msg =
        err?.response?.data?.message ||
        err?.message ||
        "Something went wrong. Please try again.";
      setError(msg); // store a string, not an object
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[100vh] flex flex-col justify-center items-center px-4">
      <div className="flex flex-col justify-center bg-slate-400 py-3 px-12 rounded-lg">
        <h1 className="font-bold text-xl text-center pb-2">Signup / Register</h1>

        <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-3">
          <label className="text-lg font-serif">Name</label>
          <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} className="font-medium text-lg px-2 py-2 rounded-md" required />

          <label className="text-lg font-serif">Email</label>
          <input type="email" placeholder="enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="font-medium text-lg px-2 py-2 rounded-md" required />

          <label className="text-lg font-serif">Password</label>
          <input type="password" placeholder="enter your password" value={password} onChange={(e) => setPassword(e.target.value)} className="font-medium text-lg px-2 py-2 rounded-md" required />

          <button type="submit" disabled={loading} className="bg-pink-400 border-none rounded-md px-12 py-2">
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        {/* Friendly error message */}
        {error && <p className="mt-3 text-red-700">{error}</p>}

        <p className="pt-5">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 text-lg border-b-blue-600">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
