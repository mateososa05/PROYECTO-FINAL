import './App.css';
import Routing from './routing/Routing';
import 'semantic-ui-css/semantic.min.css';
import { CartProvider } from './context/CartContext';


function App() {
  return (
    <div className="App">
      <CartProvider>
        <Routing />
      </CartProvider>
    </div>
  );
}

export default App;