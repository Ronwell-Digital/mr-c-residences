import "./App.css";
import Header from "./Components/Header";
import WhatTheyDo from "./Components/WhatTheyDo";
import DownloadBrochure from "./Components/DownloadBrochure";
import MobileAssistant from "./Components/MobileAssistant";
import Divider from "./Components/Divider";
import FloorPlans from "./Components/FloorPlans";
import Hero from "./Components/Hero";
import PaymentTerms from "./Components/Payment Terms/PaymentTerms";
import Inspiration from "./Components/Inspiration/Inspiration";
import Gallery from "./Components/Gallery/Gallery";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import BottomFooter from "./Components/Footer/BottomFooter";

function App() {
  return (
      <div>
          <Header />
        <Hero/>
        <WhatTheyDo />
        <DownloadBrochure />
        <MobileAssistant />
        <Divider />
        <FloorPlans />
        <DownloadBrochure />
          <PaymentTerms/>
          <Inspiration/>
          <Gallery/>
          <DownloadBrochure/>
          <Contact/>
          <Footer/>
          <BottomFooter/>
      </div>
  );
}

export default App;
