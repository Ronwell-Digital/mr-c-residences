import "./App.css";
import Divider from "./components/Divider";
import DownloadBrochure from "./components/DownloadBrochure";
import FloorPlans from "./components/FloorPlans";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MobileAssistant from "./components/MobileAssistant";
import WhatTheyDo from "./components/WhatTheyDo";
function App() {
  return (
    <div>
      <Header />
      <Hero></Hero>
      <Divider />
      <WhatTheyDo />
      <DownloadBrochure />
      <MobileAssistant />
      <Divider />
      <FloorPlans />
      <DownloadBrochure />
    </div>
  );
}

export default App;
