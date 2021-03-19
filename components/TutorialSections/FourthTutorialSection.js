import { useEffect } from "react";

export default function FourthTutorialSection({ setShowTutorial }) {
  //After two seconds, the tutorial modal is closed
  useEffect(() => {
    setTimeout(() => {
      setShowTutorial(false);
    }, 2000);
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1
        className="text-6xl text-gradient font-bold mb-24"
        style={{
          backgroundImage: "linear-gradient(190deg, #ffffff, #b26be8)",
          WebkitBackgroundClip: "text",
          textFillColor: "transparent",
          WebkitTextFillColor: "transparent",
          animation: "slide 2s linear infinite",
        }}
      >
        Now Enjoy!
      </h1>
    </div>
  );
}
