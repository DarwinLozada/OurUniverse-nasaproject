import ApodInfo from "../../components/ApodInfo";
import ActionsBar from "../../components/ActionsBar";
import { useEffect, useState } from "react";
import axios from "axios";

//API
import { fetchCertainDayApod } from "../../services/apod";

export default function Discover({ data }) {
  const [apodData, setApodData] = useState(null);
  //Set the initial state as today date formated in YYYY-MM-DD
  const [date, setDate] = useState();
  const [isFetching, setIsFetching] = useState(true);

  console.log(data);

  useEffect(() => {
    if (date) {
      fetchCertainDayApod(date)
        .then((data) => setApodData(data))
        .catch(
          (error) => new Error(`There was an error fetching the data: ${error}`)
        );
    }
  }, [date]);

  return (
    <div className="w-full h-full max-w-screen">
      <div className="w-screen">
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
  );
}
