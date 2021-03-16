import Calendar from "react-calendar";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarIcon, HomeIcon, GithubShapeIcon } from "./SvgComponents";
import Link from "next/link";
import { useEffect, useState } from "react";
import useFormatedDate from "../hooks/useFormatedDate";

// The NASA's APOD API has pages from the current date through January 1, 2015.
//This constant represents the miliseconds passed since the Unix time stamp
//until January 1, 2015.
const MIN_DATE_IN_MILISECONDS = 1420086600000;

const MIN_DATE = new Date(MIN_DATE_IN_MILISECONDS);

export default function ActionsBar({ date, setDate }) {
  //The first Apod to show is today's, so we assign as the first date
  const [unFormatedDate, setUnFormatedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(null);

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
    <footer className="fixed flex bottom-0 h-0 w-full items-center bg-mainContentBg justify-around upper-shadow border-FooterLogoColor py-8 stroke-current text-gray-400">
      <Link href="/">
        <div className="flex flex-col items-center focus:text-HeadlineColor">
          <HomeIcon />
        </div>
      </Link>
      <div className="relative flex flex-col items-center">
        <AnimatePresence>
          {showCalendar && (
            <motion.div
              className="flex absolute -top-56 bg-white px-4 shadow-xl"
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
                onClickDay={() => setShowCalendar(false)}
                className="w-72"
                tileClassName="p-1"
              />
            </motion.div>
          )}
        </AnimatePresence>
        <button
          onClick={() => setShowCalendar(!showCalendar)}
          className={`transition-colors duration-500 rounded focus:outline-none ${
            showCalendar && "text-HeadlineColor"
          }`}
        >
          <CalendarIcon />
        </button>
      </div>
      <div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/DarwinLozada/OurUniverse-nasaproject"
          className="flex flex-col-reverse md:flex-row items-center mr-4 sm:mr-12"
        >
          <GithubShapeIcon />
        </a>
      </div>
    </footer>
  );
}
