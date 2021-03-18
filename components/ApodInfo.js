import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import MediaHandler from "./MediaHandler";
import ApodPlaceholder from "./ApodPlaceholder";
import ImageExposer from "./ImageExposer";

export default function ApodInfo({ apodData, isFetching, setIsFetching }) {
  const [showImageModal, setShowImageModal] = useState(false);

  useEffect(() => {
    setIsFetching(false);
  }, [apodData]);

  if (apodData) {
    if (apodData.error) {
      console.log(apodData.error);
      return (
        <main className="flex flex-col justify-center items-center bg-mainContentBg min-h-screen px-8 pt-10 pb-24 w-full md:ml-48">
          <h1 className="text-3xl text-white text-center">
            There was an error fetching the data :(
          </h1>
        </main>
      );
    }
  }

  if (!apodData || isFetching) {
    return (
      <main className="flex flex-col bg-mainContentBg min-h-screen px-8 pt-10 pb-24 w-full md:ml-48">
        <ApodPlaceholder />
      </main>
    );
  }

  return (
    <main className="flex flex-col bg-mainContentBg min-h-screen px-8 pt-10 pb-24 md:ml-48 w-full xl:pl-10">
      <AnimatePresence>
        {showImageModal && (
          <ImageExposer
            src={apodData.url}
            setShowImageModal={setShowImageModal}
          />
        )}
      </AnimatePresence>
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
          <div className="flex flex-col xl:flex-row-reverse">
            <div
              className="images-opaque-shadow mt-12 max-w-lg md:max-w-none cursor-pointer"
              onClick={() => setShowImageModal(true)}
            >
              <MediaHandler
                src={apodData.url}
                isFetching={isFetching}
                mediaType={apodData.media_type}
              />
            </div>
            <p className="mt-12 md:px-4 xl:p-0 xl:mr-12 leading-7 text-white md:leading-9">
              {apodData.explanation}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
