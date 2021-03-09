import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { fetchTodayApod } from "../lib/apod";

export default function Home() {
  const [apodData, setApodData] = useState(false);
  console.log(apodData);

  // useEffect(
  //   () => fetchTodayApod().then((response) => setApodData(response)),
  //   []
  // );

  return <div className="text-4xl">Hola amigos</div>;
}
