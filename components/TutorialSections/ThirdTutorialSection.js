import Image from "next/image";
import { CursorIcon, ArrowIcon } from "../SvgComponents";

export default function ThirdTutorialSection({ setTutorialSection }) {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl images-opaque-shadow text-purple-100 text-center">
        Look at the images more carefully
      </h2>
      <p className="text-purple-200 text-xl sm:text-2xl mt-6 text-center images-opaque-shadow">
        Simply clicking on them
      </p>
      <div className="relative mt-16 images-opaque-shadow">
        <Image
          width="500"
          height="250"
          layout="intrinsic"
          src={"/static/images/LandingImage1.jpg"}
        />
        <CursorIcon classNames="absolute text-white transform -rotate-90 -bottom-8 right-0 w-20" />
      </div>
      <button
        onClick={() => setTutorialSection("fourth")}
        className="transition-colors duration-300 group flex bg-indigo-500 focus:outline-none focus:ring-4 ring-indigo-400 items-center text-3xl px-4 py-2 rounded-md text-white hover:text-purple-200 mt-24 sm:mt-36 md:mt-12 hover:bg-indigo-700"
      >
        <p className="text-white text-3xl">Next</p>
        <ArrowIcon classNames="transition-all ml-4 duration-300 w-8 stroke-current group-hover" />
      </button>{" "}
    </div>
  );
}
