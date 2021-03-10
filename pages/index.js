import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { GithubIcon, TwitterIcon } from "./SvgComponents";

export default function Home() {
  const [apodData, setApodData] = useState(false);
  console.log(apodData);

  // useEffect(
  //   () => fetchTodayApod().then((response) => setApodData(response)),
  //   []
  // );

  return (
    <div className="flex flex-col text-4xl bg-gradient-to-b min-h-screen from-bgGradientFirst to-bgGradientSecond overflow-hidden">
      <header className="flex w-full justify-between items-center mt-4">
        <div>
          <Image
            src="/imgs/OurUniverse Logo.png"
            width="280"
            height="95.25"
            alt="OurUniverse Logo"
          />
        </div>
        <nav className="flex flex-col-reverse md:flex-row items-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/DarwinLozada"
            className="flex flex-col-reverse md:flex-row items-center mr-4 sm:mr-12"
          >
            <p className="transition-all duration-200 font-bold text-xs sm:text-sm sm:mr-4 text-gray-800 text-center hover:text-white cursor-pointer">
              Check the code
            </p>
            <GithubIcon styles="transition-all duration-200 flex w-8 h-8 sm:w-12 sm:h-12 mb-2 sm:mb-0 lg:w-14 lg:h-14 hover:ring-2 rounded-full cursor-pointer ring-bgGradientSecond" />
          </a>
        </nav>
      </header>
      <div className="w-full flex justify-center">
        <h1 className="lg:text-7xl md:text-5xl max-w-xl lg:max-w-4xl leading-tight text-HeadlineColor font-bold mt-32 mx-6 text-shadow text-center z-10">
          Discover <span className="text-SpanHeadlineColor">our</span> planet
          and the universe where we{" "}
          <span className="text-SpanHeadlineColor">live</span> in
        </h1>
      </div>
      <div className="relative lg:mb-24">
        <div className="absolute -top-4 -left-24 w-72 h-64 md:w-9/12 lg:w-6/12 md:h-36rem">
          <Image src={"/imgs/Rocket.png"} alt="Rocket" layout="fill" />
        </div>
        <div className="absolute -right-36 sm:-right-52 -top-40 w-60 h-60 md:w-80 md:h-80 opacity-50 md:-right-32 md:opacity-75 lg:w-96 lg:h-96 lg:opacity-90">
          <Image
            src="/imgs/Planet.png"
            alt="Purple Planet drawind"
            layout="fill"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center md:justify-between w-screen mt-96 items-center lg:mb-24">
        <div className="flex flex-col h-full w-screen lg:w-auto text-center justify-center lg:justify-start lg:text-left items-center lg:items-start mx-8 md:mb-16 lg:mb-0">
          <h2 className="text-SecondHeadlineColor font-bold md:max-w-lg lg:max-w-lg text-3xl md:text-4xl lg:text-5xl mx-2">
            Explore the most interesting and curious photos shared by the NASA
          </h2>
          <p className="text-base lg:text-lg font-bold max-w-sm mt-14 leading-8">
            The Astronomy Picture of the Day is an archive that every day shows
            a different photograp of our fascinating Cosmos along with a brief
            explanation written by a professional astronomer{" "}
          </p>
        </div>
        <div className="flex flex-col w-11/12 lg:w-7/12 images-shadow h-64 md:h-96 lg:h-28rem mt-12 md:mt-0">
          <div className="flex flex-col relative w-full h-full">
            <Image
              src="/imgs/landingImage1.jpg"
              layout="fill"
              alt="North American Nightscape"
              className="opacity-80"
            />
          </div>
          <div className="flex flex-col sm:flex-row ml-2 sm:ml-0 mt-4 sm:mt-6 mr-10 w-full md:justify-between">
            <p className="text-xss md:text-sm text-gray-300">
              2021 January 29: North American Nightscape
            </p>
            <p className="leading-none text-xss md:text-sm text-gray-300">
              Compose Image Credit & Copyright:{" "}
              <span className="text-HeadlineColor font-bold">
                Liron Gertsman
              </span>
            </p>
          </div>
        </div>
      </div>
      <section
        className="flex justify-center mt-24 md:mt-48 md:mb-24 lg:mb-32"
        style={{ height: "48rem" }}
      >
        <div className="w-11/12 h-64 md:h-5/6">
          <div className="relative w-full h-full images-shadow">
            <Image
              src="/imgs/LandingVolcano.jpg"
              layout="fill"
              alt="Volcano Photograph"
              className="flex justify-center items-center"
            ></Image>
            <button className="hidden md:block transition duration-200 focus:outline-none focus:ring-4 ring-bgGradientSecond md:absolute images-shadow right-0 left-0 bottom-1/2 mx-auto bg-opacity-80 text-white font-bold  bg-CallToActionColor px-2 py-3 md:p-8 rounded hover:bg-opacity-100">
              <p className="text-2xl md:text-5xl opacity-100">
                Join the experience!
              </p>
            </button>
          </div>
          <div className="flex flex-col md:flex-row w-full mb-24 text-xl justify-between mt-6">
            <p className="text-xss md:text-sm text-gray-300">
              2021 March 3: Stars over an Erupting Volcano
            </p>
            <p className="text-xss md:text-sm text-gray-300">
              Image Credit & Copyright:{" "}
              <span className="text-HeadlineColor font-bold">
                Giuseppe Vella
              </span>
            </p>
          </div>
          <button className="transition duration-200 md:hidden w-full hover:ring-2 focus:outline-none focus:ring-4 ring-bgGradientSecond bg-CallToActionColor text-white text-3xl font-semibold rounded py-8 images-shadow">
            Join the experience!
          </button>
        </div>
      </section>
      <footer className="flex items-center w-screen justify-between md:h-32 bg-FooterColor rounded-t-5xl pt-4 px-8 lg:px-12">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-start w-full">
          <div className="flex rounded-full items-center justify-center bg-FooterLogoColor px-4 h-28 w-28 mt-4 mb-4">
            <div className="flex relative justify-center h-20 w-16 px-4 pt-2 pb-3 bg-FooterLogoColor rounded-full images-shadow mt-4 mb-8">
              <Image
                src="/imgs/dev_logo.png"
                layout="fill"
                alt="Darwin Lozada dev Logo"
              />
            </div>
          </div>
          <p className="text-gray-300 text-lg md:text-xl md:ml-6 text-center md:text-left">
            Developed and designed by{" "}
            <span className="text-white">Darwin Lozada</span>
          </p>
        </div>
        <div className="hidden md:flex gap-6 items-center">
          <GithubIcon
            styles={
              "flex transition-all duration-300 text-red-300 w-14 h-14 rounded-full"
            }
            fillColor={"#654EA3"}
          />
        </div>
      </footer>
    </div>
  );
}
