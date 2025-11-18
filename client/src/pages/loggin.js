import React, { useState } from "react";
import { api } from "../utils/api";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    if (!email.trim() || !password.trim()) {
      setError("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);
      const res = await api.post("/login", { email, password });

      // adjust this line to match your backend response
      const token = res?.data?.token || "demo-token";
      localStorage.setItem("token", token);

      navigate("/todo", { replace: true });
    } catch (err) {
      setError(err?.response?.data?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-[100vh]">
      <div className="bg-slate-400 flex flex-col py-10 px-12 gap-4 rounded-lg w-[min(92vw,420px)]">
        <h1 className="font-bold font-serif text-2xl md:text-3xl">Please Login</h1>

        <form onSubmit={handleLogin} className="flex flex-col">
          <label className="font-medium font-serif pb-1">Email</label>
          <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="enter your email"
            className="font-medium text-lg px-2 py-2 rounded-md"
            type="email"
            autoComplete="email"
          />

          <label className="font-medium font-serif pt-4 pb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="enter your password"
            className="font-medium text-lg px-2 py-2 rounded-md"
            autoComplete="current-password"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-pink-400 border-none rounded-md px-12 py-2 mt-6"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {error && (
            <p style={{ color:"red" }} className="text-lg font-serif font-medium pt-3">
              {error}
            </p>
          )}
        </form>

        <p className="text-sm">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-700 underline">Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
