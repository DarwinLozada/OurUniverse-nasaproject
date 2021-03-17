import Calendar from "react-calendar";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarIcon, HomeIcon, GithubShapeIcon } from "./SvgComponents";
import Link from "next/link";
import { useEffect, useState } from "react";
import useFormatedDate from "../hooks/useFormatedDate";
import Image from "next/image";

// The NASA's APOD API has pages from the current date through January 1, 2015.
//This constant represents the miliseconds passed since the Unix time stamp
//until January 1, 2015.
const MIN_DATE_IN_MILISECONDS = 1420086600000;

const MIN_DATE = new Date(MIN_DATE_IN_MILISECONDS);

export default function ActionsBar({ date, setDate, setIsFetching }) {
  //The first Apod to show is today's, so we assign as the first date
  const [unFormatedDate, setUnFormatedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(null);

  const handleClickDate = () => {
    setIsFetching(true);
    setShowCalendar(false);
  };

  useEffect(() => {
    if (unFormatedDate) {
      const formatedDate = useFormatedDate(unFormatedDate);
      //Change the date only if it is not the same
      if (formatedDate !== date) {
        setDate(formatedDate);
      }
    }
  }, [unFormatedDate]);

  return (
    <footer className="fixed md:h-screen md:flex-col flex bottom-0 h-0 w-full md:w-48 md:left-0 items-center bg-mainContentBg upper-shadow border-FooterLogoColor py-8 stroke-current text-gray-100">
      <div
        className="relative w-44 hidden h-24 md:block"
        style={{ filter: "brightness(1.7)" }}
      >
        <Image
          src="/static/images/OurUniverse Logo.png"
          layout="fill"
          alt="OurUniverse Logo"
          priority={true}
        />
      </div>
      <section className="flex md:flex-col px-6 justify-around w-full md:h-full">
        <Link href="/">
          <div className="flex items-center transition duration-400 focus:text-HeadlineColor hover:text-purple-500 cursor-pointer">
            <HomeIcon />
            <p className="hidden md:inline ml-3">Home</p>
          </div>
        </Link>

        <nav className="relative transition flex flex-col">
          <AnimatePresence>
            {showCalendar && (
              <motion.div
                className="flex absolute -top-64 -right-36 md:-top-24 md:-right-96 bg-white px-4 py-2 shadow-xl images-shadow"
                initial="invisible"
                animate="visible"
                exit="invisible"
                variants={{
                  invisible: { opacity: 0, scale: 0, y: 100 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  },
                }}
              >
                <Calendar
                  value={unFormatedDate}
                  onChange={setUnFormatedDate}
                  maxDate={new Date()}
                  minDate={MIN_DATE}
                  onClickDay={handleClickDate}
                  className="w-72 text-black"
                  tileClassName="transition duratin-300 p-1 hover:text-purple-400"
                />
              </motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={() => setShowCalendar(!showCalendar)}
            className={`flex flex-col transition hover:text-purple-400 duration-400 rounded focus:outline-none ${
              showCalendar && "text-purple-400"
            }`}
          >
            <div className="flex">
              <CalendarIcon />
              <p className="hidden md:inline ml-3">Calendar</p>
            </div>
          </button>
        </nav>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/DarwinLozada/OurUniverse-nasaproject"
          className="flex flex-col-reverse transition duration-500 md:flex-row items-center hover:text-purple-400"
        >
          <GithubShapeIcon />
          <p className="hidden md:inline ml-3">Repository</p>
        </a>
      </section>

      <div className="flex-col justify-center hidden md:flex mx-6">
        <p className="hidden md:block mt-20 text-xs text-gray-400">
          The minimun date you can pick is the 2015-01-01
        </p>
        <div className="flex flex-col items-center text-left text-sm mt-8">
          <p>Designed and developed by </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/DarwinLozada"
          >
            <span
              className="brand w-full font-bold text-xl"
              style={{
                "background-image": "linear-gradient(190deg, #fc65c4, #546ef7)",
                "-webkit-background-clip": "text",
                "text-fill-color": "transparent",
                "-webkit-text-fill-color": "transparent",
              }}
            >
              Darwin lozada
            </span>
          </a>
        </div>
      </div>
      <style jsx global>
        {`
          .brand {
            background-image: linear-gradient(90deg, #fc65c4, #546ef7);
            background-size: 200%;
            background-position: -110%;
          }

          .brand:hover {
            -webkit-animation: slide 2s linear infinite;
            animation: slide 1s linear infinite;
          }
        `}
      </style>
    </footer>
  );
}
