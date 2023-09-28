import React from "react";

export default function Navbar() {
  return (
    <nav className="container mx-auto mt-4 bg-white px-5 py-4 shadow-md">
      <div className="flex items-center justify-between">
        <a className="text-xl font-bold" href="#">
          Simple Header
        </a>
        <div className="flex justify-end">
          <ul className="flex space-x-4">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
