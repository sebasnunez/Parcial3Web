import Header from './Componentes/Header';
import Content1 from './Componentes/Content1';
import Content2 from './Componentes/Content2';
import Content3 from './Componentes/Content3';
import Content4 from './Componentes/Content4';
import './App.css';

function App() {
  return (
    <div className = "container">
        <div className = "container1">
        <Header />
        <Content1 />
        <Content2 />
      </div>
      <div className = "container2">
        <Content3 />
        <Content4 />
      </div>
    </div>
  );
}

export default App;
