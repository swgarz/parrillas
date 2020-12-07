
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
          <a href="https://wa.me/+525548822845?text=Me%20interesa%20el%20auto%20que%20estás%20vendiendo">
            <img className="whatsapp" src={whats} alt=""/>
          </a>
        </div>
    </div>
  );
}

export default App;
