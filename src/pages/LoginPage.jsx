import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../redux/features/user/userApi";

const footerLinks = [
  "FAQ",
  "Terms of User",
  "Cookie Preference",
  "Help Center",
  "Privacy",
  "Corporate Information",
];

export default function LoginPage() {
  const [email, setEmail] = useState(
    localStorage.getItem("savedEmail") ? localStorage.getItem("savedEmail") : ""
  );
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [rememberME, setRememberME] = useState(
    localStorage.getItem("savedEmail") ? true : false
  );
  const [login, { isLoading, error }] = useLoginMutation();

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password });
  };
  useEffect(() => {
    if (rememberME) {
      localStorage.setItem("savedEmail", email);
      setRememberME(true);
    } else {
      localStorage.clear();
    }
  }, [rememberME]);

  const handleRemember = (e) => {
    setRememberME(e.target.checked);
  };
  const handleCredentials = () => {
    setEmail("rafi@mail.com");
    setPassword("mni818");
  };
  return (
    <div className="bg-black h-screen md:bg-[url('/login-bg.jpg')] bg-cover">
      <nav className="h-[12vh] p-4">
        <Link to="/">
          <img src="/logo.png" alt="logo" className="h-8" />
        </Link>
      </nav>

      <main>
        <div className="container md:p-12 md:bg-black/90 flex items-center justify-center  max-w-xl  ">
          <form onSubmit={handleLogin} className="mx-auto space-y-4 w-full">
            <h2 className="text-white font-bold text-3xl mb-2 md:text-4xl">
              Sign In
            </h2>
            <input
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter Your Name"
              className="p-4 bg-[#333] w-full focus:outline-none text-white "
            />
            <div className="relative ">
              <input
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type={showPass ? "text" : "password"}
                placeholder="Password"
                className="p-4 bg-[#333] w-full focus:outline-none text-white"
              />

              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="uppercase tracking-wider text-gray-400 absolute right-4 bottom-4 "
              >
                {showPass ? "Hide" : "Show"}
              </button>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#e50914] text-white w-full p-3 font-semibold text-lg opacity-90 hover:opacity-100"
            >
              {isLoading ? (
                <span className="animate-pulse">logging in...</span>
              ) : (
                "Sign In"
              )}
            </button>
            <button
              type="button"
              onClick={handleCredentials}
              disabled={isLoading}
              className="bg-[#e50914] text-white w-full p-3 font-semibold text-lg opacity-90 hover:opacity-100"
            >
              Get Credentials
            </button>
            <p className="text-red-500">
              {error?.data ? error?.data?.message : ""}
            </p>
            <div>
              <input
                checked={rememberME}
                type="checkbox"
                name="rememberME"
                onChange={handleRemember}
                className="mr-2 checked:text-gray-400"
              />
              <label htmlFor="rememberME" className="text-gray-400">
                Remember Me
              </label>
              <br />

              <h3 className="text-gray-400 mt-1">
                New to Netflix?{" "}
                <span className="text-white">
                  <Link to="/register">Sign up now.</Link>
                </span>
              </h3>
            </div>
          </form>
        </div>
      </main>

      <footer className="border-t-2 border-white md:border-transparent p-4 md:px-28 text-gray-400 space-y-6 bottom-0 md:bg-black/90 fixed w-full">
        <h2>Questions? Contact us.</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {footerLinks.map((el, i) => (
            <p key={i}>{el}</p>
          ))}
        </div>
      </footer>
    </div>
  );
}
