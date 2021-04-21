import { React } from 'react';
import Header from './components/Header.js'
import Home from './components/Home.js';
import Information from './components/Information.js';
import Seamlessly from './components/Seamless.js';
import Testing from './components/Testing.js';

const App = () => {
  return (
    <div>
    <Header /> 
    <Home />
    <Information />
    <Seamlessly />
    <Testing />
    </div>
  )
}

export default App;
