import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { GithubIcon } from "./SvgComponents";

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
        <Image
          src="/imgs/OurUniverse Logo.png"
          width="341"
          height="116"
          alt="OurUniverse Logo"
        />
        <nav className="flex items-center">
          <p className="font-bold text-sm mr-2">Check the code</p>
          <GithubIcon styles="mr-8" />
        </nav>
      </header>
      <div className="w-full flex justify-center">
        <h1 className="text-7xl max-w-4xl leading-tight text-HeadlineColor font-bold mt-12 text-shadow text-center">
          Discover <span className="text-SpanHeadlineColor">our</span> planet
          and the universe where we{" "}
          <span className="text-SpanHeadlineColor">live</span> in
        </h1>
      </div>
      <div className="relative">
        <div className="absolute -top-48">
          <Image
            src={"/imgs/Rocket.png"}
            alt="Rocket"
            width="700"
            height="700"
            fill="responsive"
          />
        </div>
        <div className="absolute -right-52 -top-60">
          <Image
            src="/imgs/Planet.png"
            alt="Purple Planet drawind"
            width="460"
            height="460"
            fill="responsive"
          />
        </div>
      </div>
      <div className="flex justify-between w-screen mt-96 items-center">
        <div className="flex flex-col h-full ml-16">
          <h2 className="text-SecondHeadlineColor font-bold max-w-sm text-5xl">
            Explore the most interesting and curious photos shared by the NASA
          </h2>
          <p className="text-lg font-bold max-w-xs mt-10 leading-7">
            The Astronomy Picture of the Day is an archive that every day shows
            a different photograp of our fascinating Cosmos along with a brief
            explanation written by a professional astronomer{" "}
          </p>
        </div>
        <div className="flex flex-col w-7/12">
          <div
            style={{
              height: "34rem",
              filter: "drop-shadow(0px 20px 20px rgba(0, 0, 0, 0.7))",
            }}
            className="flex flex-col relative w-full "
          >
            <Image
              src="/imgs/landingImage1.jpg"
              layout="fill"
              alt="North American Nightscape"
              className="opacity-80"
            />
          </div>
          <div className="flex justify-between mt-6 mr-10">
            <p className="text-sm text-gray-300">
              2021 January 29: North American Nightscape
            </p>
            <p className="text-sm text-gray-300">
              Compose Image Credit & Copyright:{" "}
              <span className="text-HeadlineColor font-bold">
                Liron Gertsman
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
