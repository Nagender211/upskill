import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Cookie from "js-cookie";
import toast from "react-hot-toast";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const jwtToken = Cookie.get("jwt_token");

  const handleLogout = () => {
    Cookie.remove("jwt_token");
    toast.success("Logout successful");
    setTimeout(() => {
      navigate("/auth", { replace: true });
    }, 800);
  };

  const handleAuthClick = () => {
    if (jwtToken !== undefined) {
      handleLogout();
    } else {
      navigate("/auth");
    }
  };

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Todo", to: "/todo" },
    { label: "About Us", to: "/about" },
    { label: "Blogs", to: "/blog" },
    { label: "Contact", to: "/contact" },
  ];

  const isActive = (path) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  return (
    <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo + Brand */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="h-10 w-10 rounded-2xl bg-blue-500 flex items-center justify-center overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOd9G0VuNb6vU_jgaTOBzG4bO4hbu3zpD4mA&s"
                alt="logo"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-white tracking-tight">
                NxrTrandz
              </p>
              <p className="text-[11px] text-slate-400">
                Simple React E-Commerce Demo
              </p>
            </div>
          </div>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`relative font-medium transition ${
                  isActive(item.to)
                    ? "text-white"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
                {isActive(item.to) && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-blue-400" />
                )}
              </Link>
            ))}
          </nav>

          {/* Auth button */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleAuthClick}
              className="rounded-full border border-slate-600 bg-slate-800 px-4 py-1.5 text-xs font-semibold text-slate-100 shadow-sm hover:bg-blue-600 hover:border-blue-500 transition"
            >
              {jwtToken ? "Logout" : "Login"}
            </button>
          </div>
        </div>

        {/* Mobile nav (simple row) */}
        <nav className="flex md:hidden gap-4 pb-3 pt-1 text-xs justify-center">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`font-medium transition ${
                isActive(item.to)
                  ? "text-white"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
