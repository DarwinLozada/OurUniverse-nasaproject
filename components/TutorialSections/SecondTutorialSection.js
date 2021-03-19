import { CalendarIcon, ArrowIcon } from "../SvgComponents";
import Calendar from "react-calendar";

export default function SecondTutorialSection({ setTutorialSection }) {
  return (
    <>
      <h2 className="text-2xl text-center images-opaque-shadow text-purple-300">
        The first post you will see is going to be the last one published by the
        NASA
      </h2>
      <h3 className="text-white text-xl text-center mt-8 images-opaque-shadow">
        In order to see the other ones you will have to use the calendar:
      </h3>
      <div className="flex justify-center text-white stroke-current my-8 images-opaque-shadow">
        <CalendarIcon classNames="transition duration-300 w-16 h-16 text-purple-200 hover:text-purple-400 images-opaque-shadow" />
      </div>
      <p className="text-white text-xl text-center mt-8 images-opaque-shadow">
        Choose any day and see the post of that date
      </p>
      <p className="text-md text-white text-left mt-10 images-opaque-shadow">
        Note:{" "}
        <span className="text-gray-200 images-opaque-shadow">
          The minimun date you can choose is the 2015-01-01 and the max is
          today.
        </span>
      </p>
      <button
        onClick={() => setTutorialSection("third")}
        className="transition-colors duration-300 group flex bg-indigo-500 focus:outline-none focus:ring-4 ring-indigo-400 items-center text-3xl px-4 py-2 rounded-md text-white hover:text-purple-200 mt-16 hover:bg-indigo-700"
      >
        <p className="text-white text-3xl">Next</p>
        <ArrowIcon classNames="transition-all ml-4 duration-300 w-8 stroke-current group-hover" />
      </button>{" "}
    </>
  );
}
