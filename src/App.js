import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { MusicPlayer } from './components/MusicPlayer'; // Import MusicPlayer
import {Gallery} from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Gallery />
      <MusicPlayer /> {/* Menambahkan MusicPlayer setelah Projects */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
