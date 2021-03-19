import { ArrowIcon } from "../SvgComponents";

export default function FirstTutorialSection({ setTutorialSection }) {
  return (
    <>
      <h2 className="text-gray-100 font-bold text-4xl text-center images-opaque-shadow">
        Welcome to{" "}
        <span
          className="text-gradient"
          style={{
            backgroundImage: "linear-gradient(190deg, #ffffff, #b26be8)",
            WebkitBackgroundClip: "text",
            textFillColor: "transparent",
            WebkitTextFillColor: "transparent",
            animation: "slide 5s linear infinite",
          }}
        >
          OurUniverse
        </span>
      </h2>
      <p className="text-white shadow text-xl text-center mt-16">
        You will learn how to use the app with just a few steps!
      </p>

      <button
        onClick={() => setTutorialSection("second")}
        className="transition-colors duration-300 group flex bg-indigo-500 focus:outline-none focus:ring-4 ring-indigo-400 items-center text-3xl px-4 py-2 rounded-md text-white hover:text-purple-200 mt-32 hover:bg-indigo-700"
      >
        <p className="text-white text-3xl">Start</p>
        <ArrowIcon classNames="transition-all ml-4 duration-300 w-8 stroke-current group-hover" />
      </button>
    </>
  );
}
