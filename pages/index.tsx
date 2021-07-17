import Navbar from "../Components/Navbar";
import Homei from "../Components/Homei";
import Footer from "../Components/Footer";
import Cancel from "../Components/Cancel";
import AcceptOffer from "../Components/AcceptOffer";
import FormFill from "../Components/FormFill";
import LatestPosts from "../Components/LatestPosts";
import Faq from "../Components/Faq";
import Contact from "../Components/Contact";
import NewsLetter from "../Components/NewsLetter";
import Head from "next/head"
export default function Home() {
  return (
    <div>
      <Head>
        <title>Farehomes</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Farehomes" />
        <meta property="og:description" content="Farehomes Desc" />
        <meta property="og:image" content="/logo.svg" />
        <meta property="og:image:alt" content="farehomes" />
        <meta property="og:image:height" content="200" />
        <meta property="og:image:width" content="200" />
      </Head>

      <Navbar />
      <Homei />
      <Cancel />
      <AcceptOffer />
      <FormFill />
      <Faq />
      <LatestPosts />
      <Contact />
      <NewsLetter />
      <Footer />
    </div>
  );
}
