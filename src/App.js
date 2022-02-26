import React from 'react';
import './App.scss';


import { Navbar } from './components/Navbar/Navbar';
import { 
  About, 
  Footer,
  Header,
  Skills,
  Testimonials,
  Work
} from './container';



const App = () => {
  return (
    <div className='app'>
        <Navbar/>
        <Header/>
        <About/>
        <Work/>
        <Skills/>
        <Testimonials/>
        <Footer/>
    </div>
  );
}

export default App;