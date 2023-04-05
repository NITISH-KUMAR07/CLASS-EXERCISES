import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Product from './components/product';
import Content from './components/content';
import Day4 from './components/day4.js';
import Day1 from './components/day1.js';
import Day5 from './components/day5.js';
import Day3 from './components/day3.js';
function App() {
  return (
    <div className="App">
    <Day1/>
    <Header/>
   <Product/>
      <Content/>
      <Footer/>
      <Day3/>
      <Day4/>
      <Day5/>
    </div>
  );
}

export default App;