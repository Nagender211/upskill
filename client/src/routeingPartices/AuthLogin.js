import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Cookies from "js-cookie";

const AuthLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setEroor] = useState("");
  const navigate = useNavigate();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleCookie = (jwtToken) => {
    Cookies.set("jwt_token", jwtToken, { expires: 30 });
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setEroor("");

    if (!username || !password) {
      setEroor("Please enter both username and password");
      toast.error("Please enter both username and password");
      return;
    }

    const userDetails = { username, password };
    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };

    try {
      const respose = await fetch(url, options);
      const data = await respose.json();
      console.log(data);
      console.log(respose.ok);

      if (respose.ok === true) {
        toast.success("Login successful, redirecting to home...");
        handleCookie(data.jwt_token);
      } else {
        setEroor(data.error_msg);
        toast.error(data.error_msg);
      }
    } catch (err) {
      console.error(err);
      setEroor("Something went wrong. Please try again.");
      toast.error("Something went wrong. Please try again.");
    }
  };

  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken !== undefined) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200 px-8 py-10">
          {/* Logo / Title */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white font-bold text-xl">
              N
            </div>
            <h1 className="text-2xl font-bold text-slate-900">
              Welcome back 👋
            </h1>
            <p className="mt-1 text-xs text-slate-500">
              Please sign in to continue to your account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-1">
              <label
                htmlFor="username"
                className="text-xs font-semibold text-slate-600"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                className="border-input w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                value={username}
                onChange={handleUsername}
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="password"
                className="text-xs font-semibold text-slate-600"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="border-input w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                value={password}
                onChange={handlePassword}
              />
            </div>

            {error && (
              <p className="text-xs text-rose-500 bg-rose-50 border border-rose-200 rounded-xl px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>

          {/* Footer hint (optional) */}
          <p className="mt-6 text-[11px] text-center text-slate-400">
            Use the credentials given in the assignment to login.
          </p>
        </div>
      </div>

      <Toaster position="top-right" />
    </div>
  );
};

export default AuthLogin;
