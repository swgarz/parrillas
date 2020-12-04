import logo from '../src/img/motocicleta.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <hi>| Parrillas |</hi>
        <a
          className="App-link"
          href="https://articulo.mercadolibre.com.mx/MLM-806749117-parrilla-para-pulsar-200-y-200-fi-_JM"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Comprar</button>
        </a>
      </header>
    </div>
  );
}

export default App;
