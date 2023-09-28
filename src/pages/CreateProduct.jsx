import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/createProduct/Navbar";
import Header from "../components/createProduct/Header";
import Main from "../components/createProduct/Main";
import Footer from "../components/createProduct/Footer";
import LanguageChangeButton from "../components/createProduct/buttons/LanguageChangeButton";

export default function CreateProduct() {
  const navigate = useNavigate();

  const [welcome, setWelcome] = useState(
    <section className="fixed right-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-gray-200/50 opacity-100 backdrop-blur-md transition-all duration-500">
      <p className="text-8xl">@Hello!</p>
    </section>
  );

  useEffect(() => {
    if (localStorage.getItem("isLogin") === "true") {
      setTimeout(() => {
        setWelcome(
          <section className="fixed right-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-gray-200/50 opacity-0 backdrop-blur-md transition-all duration-500">
            <p className="text-8xl">@Hello!</p>
          </section>
        );
        setTimeout(() => {
          setWelcome("");
          localStorage.setItem("isLogin", "false");
        }, 550);
      }, 1000);
    } else {
      navigate("/login");
    }
  }, []);

  const [language, setLanguage] = useState("inggris");
  return (
    <>
      {welcome}
      <Navbar />
      <div className="container mx-auto my-5 rounded-lg border bg-white drop-shadow-md">
        <Header
          languageProps={language}
          languageChangeButtonProps={
            <LanguageChangeButton
              languageProps={language}
              onClickENProps={() => {
                setLanguage("inggris");
              }}
              onClickIDProps={() => {
                setLanguage("indonesia");
              }}
            />
          }
        />
        <Main languageProps={language} />
        <Footer languageProps={language} />
      </div>
    </>
  );
}
