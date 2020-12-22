
import './App.css';
import Header from './header';
import Container from './container';
import "bootstrap/dist/css/bootstrap.min.css";
import whats from './img/whatsapp.svg';

function App() {
  return (
    <div className="">
        <Header />
        <Container />
        
        <div className="">
          <a href="https://wa.me/+525560702145?text=Me%20interesa%20comprar%20una%20parrilla%20para%20moto">
            <img className="whatsapp" src={whats} alt=""/>
          </a>
        </div>
    </div>
  );
}

export default App;
