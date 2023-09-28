import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bootstrapImages from "../images/Bootstrap.svg";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [incorrectData, setIncorrectData] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email === "admin@gmail.com" && formData.password === "admin") {
      localStorage.setItem("isLogin", "true");
      navigate("/createproduct");
    } else {
      setIncorrectData("Incorrect email or password");
    }
  };

  const inputFieldStyle = {
    base: "w-full rounded border-2 border-gray-200 px-4 py-2 outline-none focus:border-blue-500",
    error: "w-full rounded border-2 border-red-500 px-4 py-2 outline-none focus:border-blue-500",
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-xl bg-white p-4 shadow-md">
        <img src={bootstrapImages} width={150} height={0} alt="Bootstrap" className="mx-auto mb-5 mt-4 h-auto" />
        <h2 className="mb-4 text-center text-2xl font-bold">Login to your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email :
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={incorrectData === "Incorrect email or password" ? inputFieldStyle.error : inputFieldStyle.base}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-600">
              Password :
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={incorrectData === "Incorrect email or password" ? inputFieldStyle.error : inputFieldStyle.base}
              required
            />
          </div>
          <p className="py-5 text-center text-red-500">{incorrectData}</p>
          <div className="mb-6">
            <button type="submit" className="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 outline-none">
              Login
            </button>
          </div>
        </form>
        <footer className="pb-4 pt-1 text-center text-gray-500">
          <p>© 2023 Intan Meilanie Nugraha. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
