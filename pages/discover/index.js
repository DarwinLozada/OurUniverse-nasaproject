import ApodInfo from "../../components/ApodInfo";
import MobileFooter from "../../components/ActionsBar";
import { useEffect, useState } from "react";

//API
import { fetchCertainDayApod } from "../../services/apod";

export default function Discover() {
  const [apodData, setApodData] = useState(null);
  //Set the initial state as today date formated in YYYY-MM-DD
  const [date, setDate] = useState();

  useEffect(() => {
    if (date) {
      fetchCertainDayApod(date).then((data) => setApodData(data));
    }
  }, [date]);

  return (
    <div className="w-full h-full max-w-screen">
      <div className="w-screen">
        <ApodInfo apodData={apodData} />
        <MobileFooter date={date} setDate={setDate} />
      </div>
    </div>
  );
}
