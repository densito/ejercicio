import './App.css';
import { Contacto} from './componenteA';
import { ComponenteB } from './componenteB';


function App() {
  return (
    <div className="App">
      <Contacto 
      nombre= 'edgar'
      apellido= 'olmedo'
      email='edgarolmedo44@gmail.com' />
      <ComponenteB conectado={true}/>
      
    </div>
  );
}

export default App;
