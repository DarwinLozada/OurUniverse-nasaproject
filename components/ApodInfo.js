import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import ImageHandler from "./ImageHandler";
import ApodPlaceholder from "./ApodPlaceholder";

export default function ApodInfo({ apodData, isFetching, setIsFetching }) {
  useEffect(() => {
    setIsFetching(false);
  }, [apodData]);

  if (!apodData || isFetching) {
    return (
      <main className="flex flex-col bg-mainContentBg min-h-screen px-8 pt-10 pb-24">
        <ApodPlaceholder isThereAnyApodData={Boolean(apodData)} />
      </main>
    );
  }

  return (
    <main className="flex flex-col bg-mainContentBg min-h-screen px-8 pt-10 pb-24">
      <AnimatePresence exitBeforeEnter>
        <motion.div
          initial="invisible"
          animate="visible"
          exit="invisible"
          key="apodInfo"
          transition={{ duration: 1.2 }}
          variants={{
            invisible: { opacity: 0, y: 100 },
            visible: {
              opacity: 1,
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
              Copyright: {apodData.copyright ? apodData.copyright : "not found"}
            </p>
          </div>
          <div className="images-opaque-shadow mt-12 max-w-lg">
            {apodData.media_type === "image" ? (
              <ImageHandler
                layout="responsive"
                src={apodData.url}
                isFetching={isFetching}
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
      </AnimatePresence>
    </main>
  );
}
