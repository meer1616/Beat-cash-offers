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
export default function Home() {
  return (
    <div>
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
