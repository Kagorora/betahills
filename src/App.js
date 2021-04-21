import { React } from 'react';
import Header from './components/Header.js'
import Home from './components/Home.js';
import Information from './components/Information.js';
import Seamlessly from './components/Seamless.js';

const App = () => {
  return (
    <div>
    <Header /> 
    <Home />
    <Information />
    <Seamlessly />
    </div>
  )
}

export default App;
