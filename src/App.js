import Navbar from "./components/NavBar/navbar"; 
import Intro from './components/Intro/intro'; 
import About from "./components/About/about"; 
import Education from "./components/Education/education"; 
import Projects from "./components/Projects/projects"; 
import Tools from "./components/Tools/tools"; 
import Contact from "./components/Contact/contact"; 
import Footer from "./components/Footer/footer"; 
import Certificates from './components/Certificates/certificates'; 
function App() { return ( <div className="App"> 
<Navbar /> <main> <section id="home" tabIndex={-1}> 
  <Intro /> </section> <section id="about" tabIndex={-1}> 
    <About /> </section> <section id="education" tabIndex={-1}> 
      <Education /> </section> <section id="projects" tabIndex={-1}> 
        <Projects /> </section> <section id="certificates" tabIndex={-1}> 
          <Certificates /> </section> <section id="tools" tabIndex={-1}> 
            <Tools /> </section> <section id="contact" tabIndex={-1}> 
              <Contact /> </section> </main> 
              <Footer /> 
              </div> 
              ); 
            } 
            export default App;