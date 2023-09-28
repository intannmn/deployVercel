import React from "react";
import { Link } from "react-router-dom";
import landingPageImage from "../images/LandingPage.png";

export default function LandingPage() {
  return (
    <>
      <header className="bg-white text-black py-2 px-6 flex items-center font-roboto">
        <h1 className="text-3xl font-bold mr-auto">Simple Header</h1>
        <nav>
          <ul className="flex gap-5 items-center">
            <li>
              <a href="#Home" className="text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500">
                FAQs
              </a>
            </li>
            <li>
              <a href="#About" className="text-blue-500">
                About
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="Home">
        <section className="Hero-Section bg-gradient-to-t from-blue-700 to-blue-900 flex justify-center items-center gap-10 py-36 px-6">
          <div className="Hero-Content">
            <div className="Hero-Text">
              <h1 className="text-4xl text-white font-jost">Better Solution For Your Business</h1>
              <p className="text-xl text-white opacity-80">We are a team of talented designers making websites with Bootstrap</p>
            </div>
            <div className="Hero-Buttons flex items-center gap-16 mt-10">
              <Link to={"/login"}>
                <button type="button" className="px-6 py-3 bg-blue-500 text-white rounded-full text-lg font-jost hover:bg-blue-600">
                  Get Started
                </button>
              </Link>
              <a
                href="https://www.youtube.com/watch?v=4OQmtrYtkPg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-lg font-open-sans hover:underline">
                Watch Video
              </a>
            </div>
          </div>
          <img src={landingPageImage} alt="image" className="w-96 h-auto" />
        </section>

        <section className="Newsletter-Section bg-gray-200 text-center py-36 px-6">
          <div className="Newsletter-Content">
            <h2 className="text-3xl text-blue-700 font-jost">Join Our Newsletter</h2>
            <p className="text-lg text-gray-600 mb-8">Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form className="flex items-center justify-center">
              <input type="email" name="email" id="email" className="px-8 py-2 bg-white rounded-full text-lg shadow-md outline-none w-[800px]" />
              <a
                href="/4_HTML/Praktikum/Create Account/createAccount.html"
                className="px-6 py-3 -ml-20 bg-blue-500 text-white rounded-full text-lg font-open-sans hover:bg-blue-600">
                Subscribe
              </a>
            </form>
          </div>
        </section>
      </main>

      <footer id="About" className="bg-white">
        <div className="Footer-Content flex justify-around items-start flex-wrap py-10 px-6">
          <div className="Footer-Section">
            <h2 className="text-2xl text-blue-700 font-jost">ARSHA</h2>
            <p className="text-gray-600 mb-4">
              A108 Adam Street <br /> New York, NY 535022 <br /> United States <br /> <br />
              <strong>Phone:</strong> +1 5589 55488 55 <br />
              <strong>Email:</strong> info@example.com
            </p>
          </div>

          <div className="Footer-Section">
            <h4 className="text-lg text-blue-700 font-jost">Useful Links</h4>
            <ul className="text-gray-600">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="Footer-Section">
            <h4 className="text-lg text-blue-700 font-jost">Our Service</h4>
            <ul className="text-gray-600">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Product Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Graphic Design
                </a>
              </li>
            </ul>
          </div>

          <div className="Footer-Section">
            <h4 className="text-lg text-blue-700 font-jost">Our Social Networks</h4>
            <p className="text-gray-600 mb-4">
              Cras fermentum odio eu feugiat lide par <br /> naso tierra videa magna derita valies
            </p>
            <div className="space-x-2">
              <div className="p-5 rounded-full inline-block bg-blue-500"></div>
              <div className="p-5 rounded-full inline-block bg-blue-500"></div>
              <div className="p-5 rounded-full inline-block bg-blue-500"></div>
              <div className="p-5 rounded-full inline-block bg-blue-500"></div>
              <div className="p-5 rounded-full inline-block bg-blue-500"></div>
            </div>
          </div>
        </div>

        <section className="Copyright bg-blue-700 text-white py-4 px-6 text-sm flex justify-between items-center">
          <p>
            &copy; 2023 <strong>Intan Meilanie Nugraha</strong>. All rights reserved.
          </p>
          <p>
            Designed by <span className="text-blue-300">BootstrapMade</span>
          </p>
        </section>
      </footer>
    </>
  );
}
