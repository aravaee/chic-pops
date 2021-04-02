import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Slider from './components/Slider';
import { SliderData } from "./components/Slider/SliderData";
import Party from "./components/Party"
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <div id="premium"></div>
      <Products heading='Premium Cake Pops' data={productData}/>
      <Feature/>
      <div id="basic"></div>
      <Products heading='Basic Cake Pops' data={productDataTwo} />
      <Slider slides={SliderData}/>
      <Party />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
