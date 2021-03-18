import Calendar from "react-calendar";
import { CalendarIcon, HomeIcon, GithubShapeIcon } from "./SvgComponents";
import { motion, AnimatePresence } from "framer-motion";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { fetchTodayApod } from "../services/apod";
import useFormatedDate from "../hooks/useFormatedDate";

// The NASA's APOD API has pages from the current date through January 1, 2015.
//This constant represents the miliseconds passed since the Unix time stamp
//until January 1, 2015.
const MIN_DATE_IN_MILISECONDS = 1420086600000;

const MIN_DATE = new Date(MIN_DATE_IN_MILISECONDS);

export default function ActionsBar({ date, setDate, setIsFetching }) {
  //The first Apod to show is today's, so we assign as the first date
  const [unFormatedDate, setUnFormatedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(null);

  const handleClickDate = () => {
    setIsFetching(true);
    setShowCalendar(false);
  };

  // Set the initial date as the last Apod posted in the Api
  // This avoids conflicts between different time zones

  useEffect(() => {
    fetchTodayApod().then((data) => {
      const todayApod = data;
      setDate(todayApod.date);
    });
  }, []);

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
    <footer className="fixed md:h-screen md:flex-col flex bottom-0 h-0 w-full md:w-48 md:left-0 items-center bg-mainContentBg upper-shadow border-FooterLogoColor py-8 stroke-current text-gray-300">
      <div
        className="relative hidden md:block"
        style={{ filter: "brightness(1.7)" }}
      >
        <Image
          src="/static/images/OurUniverse Logo Light.png"
          layout="intrinsic"
          alt="OurUniverse Logo"
          width="165"
          height="110"
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
        <div className="flex flex-col text-left text-sm mt-8">
          <p>Designed and developed by </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/DarwinLozada"
          >
            <span
              className="text-gradient w-full font-bold text-xl"
              style={{
                backgroundImage: "linear-gradient(190deg, #fc65c4, #546ef7)",
                WebkitBackgroundClip: "text",
                textFillColor: "transparent",
                WebkitTextFillColor: "transparent",
              }}
            >
              Darwin lozada
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
