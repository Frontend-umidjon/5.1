import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Feautures from './components/Feautures/Feautures';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Feautures />
    </div>
  );
}

export default App;
