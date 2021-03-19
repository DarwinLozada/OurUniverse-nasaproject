import Head from "next/head";
import Link from "next/link";

import Image from "next/image";
import {
  GithubIcon,
  RocketSvg,
  PlanetSvg1,
  PlanetSvg2,
} from "../components/SvgComponents";
import Footer from "../components/LandingFooter";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const rocketVariants = {
    hidden: {
      scale: 0.2,
      x: -1000,
    },
    visible: {
      scale: 1,
      x: "70%",
      rotate: [25, 0, -20],
    },
  };

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Explore our amazing universe through the NASA's Astronomic Picture of the Day API"
        />
        <meta
          name="og:description"
          content="Explore our amazing universe through the NASA's Astronomic Picture of the Day API"
        />
        <meta property="og:ouruniverse" content="Ouruniverse" />
        <meta property="og:title" content="Our Universe" />
        <meta property="og:type" content="website" />
        <meta name="author" content="Darwin Lozada" />
        <meta name="robots" content="index" />
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="og:image" content="https://i.imgur.com/K1ZGEcc.png" />
        <meta property="og:url" content="https://our-universe.vercel.app/" />

        <title>Our Universe - Discover</title>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossorigin
        />
      </Head>
      <div className="flex flex-col text-4xl bg-gradient-to-b min-h-screen from-bgGradientFirst to-bgGradientSecond overflow-hidden">
        <header className="flex w-full justify-between items-center mt-4 z-10">
          <div className="relative w-44 sm:w-1/3 lg:w-72 h-16 md:h-24 ">
            <Image
              src="/static/images/OurUniverse Logo.png"
              layout="intrinsic"
              alt="OurUniverse Logo"
              width="270"
              height="100"
            />
          </div>
          <nav className="flex flex-col-reverse md:flex-row items-center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/DarwinLozada/OurUniverse-nasaproject"
              className="flex flex-col-reverse md:flex-row items-center mr-4 sm:mr-12"
            >
              <p className="transition-all duration-200 font-bold text-xs sm:text-sm sm:mr-4 text-gray-800 text-center hover:text-white cursor-pointer">
                Check the code
              </p>
              <GithubIcon classNames="transition-all duration-200 flex w-8 h-8 sm:w-12 sm:h-12 mb-2 sm:mb-0 lg:w-14 lg:h-14 hover:ring-2 rounded-full cursor-pointer ring-bgGradientSecond" />
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
          <motion.div
            className="absolute -top-4 -left-24 w-72 h-64 md:w-9/12 lg:w-5/12 md:h-36rem"
            initial="hidden"
            animate="visible"
            variants={rocketVariants}
            transition={{
              duration: 6,
              type: "spring",
            }}
          >
            <RocketSvg
              classNames="mt-12 w-36 md:w-48 lg:w-72 text-blue-300 opacity-100"
              fillColor={"#704180"}
            />
          </motion.div>
          <div className="planet-container">
            <div className="absolute planet1 ring-blue-500 -right-24 sm:-right-52 -top-40 w-36 h-36 md:w-80 md:h-80 opacity-50 md:-right-32 md:opacity-75 lg:w-96 lg:h-96 lg:opacity-50">
              <PlanetSvg1 fillColor={"#320555"} classNames="opacity-50" />
            </div>
            <div className="absolute planet2 ring-blue-500 -left-24 sm:-right-52 -top-40 w-36 h-36 md:w-80 md:h-80 opacity-50 md:-right-32 md:opacity-75 lg:w-96 lg:h-96 lg:opacity-50">
              <PlanetSvg2 fillColor={"#320555"} classNames="opacity-50" />
            </div>
          </div>
        </div>
        <FirstImageSection />
        <SecondImageSection />
        <Footer />
      </div>
    </>
  );
}

const FirstImageSectionVariants = {
  hidden: {
    scale: 0.3,
    opacity: 0.3,
  },
  visible: {
    scale: 1,
    opacity: 1,
  },
};

const FirstImageSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      className="flex flex-col justify-center items-center mt-96 md:mt-36rem"
      ref={ref}
    >
      <motion.div
        variants={FirstImageSectionVariants}
        transition={{
          duration: 3,
          type: "spring",
        }}
        inital="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex flex-col lg:flex-row justify-center md:justify-between w-screen items-center lg:mb-24"
      >
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
        <div className="flex flex-col w-11/12 lg:w-7/12 images-shadow h-64 md:h-28rem lg:h-34rem mt-12 md:mt-0">
          <div className="flex flex-col relative w-full h-full">
            <Image
              src="/static/images/LandingImage1.jpg"
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
      </motion.div>
    </div>
  );
};

const SecondImageSectionVariants = {
  hidden: {
    scale: 0.3,
    opacity: 0,
    y: "-50%",
  },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
  },
};

const SecondImageSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      className="flex justify-center mt-24 md:mt-48 md:mb-48"
      style={{ height: "48rem" }}
      ref={ref}
    >
      {" "}
      <motion.div
        className="w-11/12 h-64 md:h-full"
        variants={SecondImageSectionVariants}
        transition={{
          duration: 3,
          type: "spring",
        }}
        inital="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="relative w-full h-full images-shadow">
          <Image
            src="/static/images/LandingVolcano.jpg"
            layout="fill"
            alt="Volcano Photograph"
            className="flex justify-center items-center"
          />
          <Link href="/discover">
            <button className="hidden md:block transition duration-500 bg-purple-800 hover:bg-purple-900 focus:outline-none focus:ring-4 ring-bgGradientSecond md:absolute images-opaque-shadow right-0 left-0 bottom-1/2 mx-auto text-white px-2 py-3 md:p-8 rounded hover:bg-opacity-100">
              <p
                className="text-2xl text-gradient text-gradient-hover md:text-6xl md:px-8 py-4 opacity-100 text-white font-bold"
                style={{
                  backgroundImage: "linear-gradient(190deg, #ffffff, #e9aefc)",
                  WebkitBackgroundClip: "text",
                  textFillColor: "transparent",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Get started!
              </p>
            </button>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row w-full mb-24 text-xl justify-between mt-6">
          <p className="text-xs md:text-sm text-gray-300">
            2021 March 3: Stars over an Erupting Volcano
          </p>
          <p className="text-xs md:text-sm text-gray-300">
            Image Credit & Copyright:{" "}
            <span className="text-HeadlineColor font-bold">Giuseppe Vella</span>
          </p>
        </div>
        <Link href="/discover">
          <button className="transition duration-500 md:hidden w-full focus:outline-none focus:ring-4 ring-bgGradientSecond bg-purple-800 hover:bg-purple-900 text-white text-3xl font-semibold rounded py-12 images-shadow">
            <p
              className="text-5xl font-bold text-gradient text-gradient-hover opacity-100 text-white"
              style={{
                backgroundImage: "linear-gradient(190deg, #ffffff, #e9aefc)",
                WebkitBackgroundClip: "text",
                textFillColor: "transparent",
                WebkitTextFillColor: "transparent",
              }}
            >
              Get started!
            </p>
          </button>
        </Link>
      </motion.div>
    </section>
  );
};
