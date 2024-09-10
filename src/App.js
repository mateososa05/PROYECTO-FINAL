import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header/Index';
import ProductosLista from './componentes/Productos/Index';
import Carrousel from './componentes/Carrousel/Index';
import Contacto from './componentes/Contacto/Index';
import Footer from './componentes/Footer/Index';



function App() {
  return (
    <div className="App">
    <Header/>
    <Carrousel/>
    <ProductosLista/>
    <Contacto/>
    <Footer/>


    </div>

  
  
  );
}

export default App;
