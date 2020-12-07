
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
        <Container />
        <Container />
        <div className="d-flex justify-content-center">
          
          <a  href="">
            <img className="whatsapp" src={whats} alt=""/>
          </a>
        </div>
    </div>
  );
}

export default App;
