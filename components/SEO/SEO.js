import Head from "next/head";

export default function SEO() {
  return (
    <Head>
      <meta
        name="description"
        content="Explore our amazing universe through the NASA's Astronomic Picture of the Day API / OurUniverse uses the APOD (Astronomy Picture of the day) API of the NASA to deliver the most interesting and beautiful images published and commented by professional astronomers."
      />
      <meta
        name="og:description"
        content="Explore our amazing universe through the NASA's Astronomic Picture of the Day API"
      />
      <meta property="og:ouruniverse" content="Ouruniverse" />
      <meta property="og:title" content="Our Universe" />
      <meta property="og:type" content="website" />
      <meta name="author" content="Darwin Lozada" />
      <meta name="robots" content="index" />
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="og:image" content="https://i.imgur.com/eNpnn5y.png" />
      <meta
        name="image"
        property="og:image"
        content="https://i.imgur.com/eNpnn5y.png"
      />

      <meta property="og:url" content="https://our-universe.vercel.app/" />

      <title>Our Universe - Discover</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin />
    </Head>
  );
}
