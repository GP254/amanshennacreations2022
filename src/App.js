import "./App.css";
import Home from "./Scenes/Home/home.scene";
import Services from "./Scenes/Services/services.scene";
import About from "./Scenes/About/about.scene";
import PhotoGallery from "./Scenes/Gallery/gallery.scene";
import Contact from "./Scenes/Contact/contact.scene";
import Footer from "./Scenes/Footer/footer.scene";
import NavBar from "./Components/Navbar/navbar.component";
import Fade from "react-reveal/Fade";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Services />
      <About />
      <PhotoGallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
