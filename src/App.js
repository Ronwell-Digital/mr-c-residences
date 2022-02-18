import "./App.css";
import Residences from "./components/Residences";
import Private_Office from "./components/Private_Office";

import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Residences />
      <Private_Office />
      <Form />
        <Footer/>
    </div>
  );
}

export default App;
