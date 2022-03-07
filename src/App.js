import "./App.css";
import Header from "./components/Header";
import WhatTheyDo from "./components/WhatTheyDo";
import DownloadBrochure from "./components/DownloadBrochure";
import MobileAssistant from "./components/MobileAssistant";
import Divider from "./components/Divider";
import FloorPlans from "./components/FloorPlans";
import Hero from "./components/Hero";
import PaymentTerms from "./components/PaymentTerms/PaymentTerms";
import Inspiration from "./components/Inspiration/Inspiration";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BottomFooter from "./components/Footer/BottomFooter";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <WhatTheyDo />
      <DownloadBrochure />
      <MobileAssistant />
      <Divider />
      <FloorPlans />
      <DownloadBrochure />
      <PaymentTerms />
      <Inspiration />
      <Gallery />
      <DownloadBrochure />
      <Contact />
      <Footer />
      <BottomFooter />
    </div>
  );
}

export default App;
