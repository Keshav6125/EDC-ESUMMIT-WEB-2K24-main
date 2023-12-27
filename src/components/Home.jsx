import "./Zest.css";

import About from '../pages/About';
import Contact from './contact';

import Zest from "./Zest";


/*const styles = {
  zoomIn: {
    animation: ' x 25s  ',
    animationIterationCount:'infinite',
    animationName: Radium.keyframes(zoomIn, 'zoomIn')
  }
}*/





export default function Home() {
  return (
    <>
   <Zest />
    

  
  <About />
  <Contact />
   </>
  )
}

