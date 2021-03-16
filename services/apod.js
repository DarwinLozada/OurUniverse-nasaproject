import axios from "axios";

const key = "b4Tr3NSppWqc1BaLty68iazAybyDXZ2d7tiKI8iN";
const url = `https://api.nasa.gov/planetary/apod?api_key=${key}`;

//APOD stans for "Astronomic picture of the day"

export const fetchTodayApod = () => {
  const request = axios.get(url);
  return request.then((response) => response.data);
};

export const fetchCertainDayApod = (date) => {
  const request = axios.get(`${url}&date=${date}`);
  return request.then((response) => response.data);
};
