import "./App.css";

import { Navbar } from "./component/NavBar/NavBar";
import { Slider } from "./component/Slider/Slider";
import { MainContent } from "./component/MainContent/MainContent";
import { Footer } from "./component/Footer/Footer";
import { ContactUs } from "./component/ContactUs/ContactUs";
import { Teams } from "./component/Teams/Teams";

function App() {
  return (
    <>
      <div id="main-container">
        <Navbar />
        <Slider />
      </div>

      <main>
        <MainContent />
        <Teams />
        <ContactUs />
      </main>

      <Footer />
    </>
  );
}

export default App;
