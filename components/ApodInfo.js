import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ImageHandler from "./ImageHandler";

function ApodPlaceholder({ isThereAnyApodData }) {
  return (
    <>
      {/* {!isThereAnyApodData && ( */}
      <>
        <div className="animate-pulse w-full h-12 rounded-full bg-gray-500"></div>
        <div className="animate-pulse w-4/6 h-8 rounded-full bg-gray-500 mt-4"></div>
        <div className="animate-pulse w-full bg-gray-500 h-72 rounded mt-8"></div>
        <div className="animate-pulse w-full h-6 bg-gray-500 rounded mt-16"></div>
        <div className="animate-pulse w-full h-6 bg-gray-500 rounded mt-6"></div>
        <div className="animate-pulse w-full h-6 bg-gray-500 rounded mt-6"></div>
        <div className="animate-pulse w-full h-6 bg-gray-500 rounded mt-6"></div>
      </>
      {/* )} */}
    </>
  );
}

export default function ApodInfo({ apodData }) {
  const [prevApodData, setPrevApodData] = useState(apodData);

  if (!apodData) {
    return (
      <main className="flex flex-col bg-mainContentBg min-h-screen px-8 pt-10 pb-24">
        <ApodPlaceholder isThereAnyApodData={Boolean(apodData)} />
      </main>
    );
  }

  return (
    <main className="flex flex-col bg-mainContentBg min-h-screen px-8 pt-10 pb-24">
      <AnimatePresence exitBeforeEnter>
        {apodData ? (
          <motion.div
            initial="invisible"
            animate="visible"
            exit="invisible"
            key="apodInfo"
            variants={{
              invisible: { opacity: 0, scale: 0, y: 100 },
              visible: {
                opacity: 1,
                scale: 1,
                y: 0,
              },
            }}
          >
            <h2 className="text-white font-semibold text-4xl">
              {apodData.title}
            </h2>
            <div className="flex text-sm text-gray-400 mt-6">
              <p className="mr-6">{apodData.date}</p>
              <p>
                Copyright:{" "}
                {apodData.copyright ? apodData.copyright : "not found"}
              </p>
            </div>
            <div className="images-opaque-shadow mt-12 max-w-lg">
              {apodData.media_type === "image" ? (
                <ImageHandler
                  layout="responsive"
                  src={apodData.url}
                  width="960"
                  height="1200"
                />
              ) : (
                <iframe src={apodData.url} className="w-full h-72" />
              )}
            </div>
            <p className="mt-12 px-4 leading-7 text-white">
              {apodData.explanation}
            </p>
          </motion.div>
        ) : (
          <motion.section
            initial="invisible"
            animate="visible"
            exit="invisible"
            variants={{
              invisible: { opacity: 0, scale: 0.7 },
              visible: {
                opacity: 1,
                scale: 1,
              },
            }}
            transition={{
              ease: "easeOut",
              duration: 4,
            }}
          >
            <ApodPlaceholder
              isThereAnyApodData={Boolean(apodData)}
              key="apodPlaceholder"
            />
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}
