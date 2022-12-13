import "./App.css";
import NavBar from "./Components/Navbar/navbar.component";
import Home from "./Scenes/Home/home.scene";
import Services from "./Scenes/Services/services.scene";
import About from "./Scenes/About/about.scene";
import PhotoGallery from "./Scenes/Gallery/gallery.scene";
import Contact from "./Scenes/Contact/contact.scene";
import Footer from "./Scenes/Footer/footer.scene";

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
