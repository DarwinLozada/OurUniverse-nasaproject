import axios from "axios";
const apiKey = "KEeUOHJqJfFzLV9eccjWU5aIuqWDUmZ5cTnYGPBO";
const baseUrl = "https://api.nasa.gov/planetary/apod";

export const fetchTodayApod = () => {
  const request = axios.get(`${baseUrl}?api_key=${apiKey}&date=2021-03-08`);
  return request.then((response) => response.data);
};
