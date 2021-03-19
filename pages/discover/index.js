import ApodInfo from "../../components/ApodInfo/ApodInfo";
import ActionsBar from "../../components/ActionsBar";
import { useEffect, useState } from "react";
import Head from "next/head";
import TutorialModal from "../../components/Modals/TutorialModal";
//API
import { fetchCertainDayApod } from "../../services/apod";
import { AnimatePresence } from "framer-motion";

export default function Discover() {
  const [apodData, setApodData] = useState(null);
  const [showTutorial, setShowTutorial] = useState(false);
  //Set the initial state as today date formated in YYYY-MM-DD
  const [date, setDate] = useState();
  const [isFetching, setIsFetching] = useState(true);

  //If the user has done the tutorial once, we do not
  //show it again
  useEffect(() => {
    if (!localStorage.getItem("hadDoneTutorial")) {
      localStorage.setItem("hadDoneTutorial", true);
      setShowTutorial(true);
    }
  }, []);

  useEffect(() => {
    if (date) {
      fetchCertainDayApod(date)
        .then((data) => setApodData(data))
        .catch((error) => {
          setApodData({ error: error });
        });
    }
  }, [date]);

  return (
    <>
      <div id="modal"></div>
      <Head>
        <title>Our Universe</title>
        <meta
          name="description"
          content="Explore our amazing universe through
        the NASA's Astronomic Picture of the Day API"
        />
        <meta name="author" content="Darwin Lozada" />
        <meta name="robots" content="index" />
      </Head>
      <div className="flex w-full h-full max-w-screen">
        <AnimatePresence>
          {showTutorial && <TutorialModal setShowTutorial={setShowTutorial} />}
        </AnimatePresence>
        <div className="flex flex-row-reverse w-screen ">
          <ApodInfo
            apodData={apodData}
            isFetching={isFetching}
            setIsFetching={setIsFetching}
          />
          <ActionsBar
            date={date}
            setDate={setDate}
            setIsFetching={setIsFetching}
          />
        </div>
      </div>
    </>
  );
}
