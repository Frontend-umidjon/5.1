import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Feautures from './components/Feautures/Feautures';
import Section2 from './components/Section2/Section2';
import Products from './components/Products/Products';
import Testimonials from './components/Testimonials/Testimonials';
import AppDesc from './components/AppDesc/AppDesc';
import Question from './components/Question/Question';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Feautures />
      <Section2 />
      <Products />
      <Testimonials />
      <AppDesc />
      <Question />
      <Footer />
    </div>
  );
}

export default App;
