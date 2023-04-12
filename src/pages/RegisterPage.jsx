import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const footerLinks = [
  "FAQ",
  "Terms of User",
  "Cookie Preference",
  "Help Center",
  "Privacy",
  "Corporate Information",
];
export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const dispatch = useDispatch();
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(
      loginUser({
        name: "rafiqul bashar",
        email: "rafi@mail.com",
        uid: 6544,
      })
    );
  };
  return (
    <div className="bg-black h-screen md:bg-[url('/login-bg.jpg')] bg-cover">
      <nav className="h-[12vh] p-4">
        <Link to="/">
          <img src="/logo.png" alt="logo" className="h-8" />
        </Link>
      </nav>

      <main>
        <div className="container p-4 md:p-12 md:bg-black/90 flex items-center justify-center  max-w-xl  ">
          <form onSubmit={handleRegister} className="mx-auto space-y-4">
            <h2 className="text-white font-bold text-3xl mb-2 md:text-4xl">
              Register
            </h2>
            <input
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="email"
              placeholder="Enter Your Name"
              className="p-4 bg-[#333] w-full focus:outline-none text-white "
            />
            <input
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter Your Email"
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
            <button className="bg-[#e50914] text-white w-full p-3 font-semibold text-lg opacity-90 hover:opacity-100">
              Register
            </button>
            <div>
              <h3 className="text-gray-400 mt-1">
                Already have an account?{" "}
                <span className="text-white">
                  <Link to="/login">Login Here.</Link>
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
