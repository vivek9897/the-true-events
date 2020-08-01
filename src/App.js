import React from 'react'
import NavBar from './components/navbar';
import {BrowserRouter,Route} from 'react-router-dom'
import Contact from './components/Screens/ContactMe'
import Timeline from './components/Screens/Timeline'
import Home from './components/Screens/Home';
import Aboutme from './components/Screens/aboutme';
import Footer from './components/Screens/footer';
import './components/app.css'

function App(){
  return (
    <BrowserRouter>
    <NavBar />
   
    <Route exact path = '/'>
      <Home />
    </Route>
    <Route path='/Timeline'>
      <Timeline />
    </Route>
    <Route path = '/Contactme'>
      <Contact />
    </Route>
    <Route path = '/aboutme'>
      <Aboutme />
    </Route>
    
    <Footer/>
    </BrowserRouter>
    
  );
}
export default App;

