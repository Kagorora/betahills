import { React } from 'react';
import Header from './components/Header.js'
import Home from './components/Home.js';
import Information from './components/Information.js';
import Seamlessly from './components/Seamless.js';
import Testing from './components/Testing.js';
import Partners from './components/Partners.js';
import Women from './components/Women.js';
import More from './components/More.js';
import Footer from './components/Footer.js';

const App = () => {
  return (
    <div>
    <Header /> 
    <Home />
    <Information />
    <Seamlessly />
    <Testing />
    <Partners />
    <Women />
    <More />
    <Footer />
    </div>
  )
}

export default App;
