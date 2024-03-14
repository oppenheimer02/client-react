import React from 'react'
import Header from './Components/Header';
import Services from './Components/Services';
import About from './Components/About.';
import About1 from '../src/images/feature_3.png';
import Presentation from './Components/Presentation';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {

  return (
   <div className='App'>

       <Header/>
       <Services/>
       <About image= {About1} h2= 'About Us' button= 'Read more' />
       <Presentation/>
       <Contact/>
       <Footer/>
       
    </div>
  );
}

export default App;
