import Header from './Componentes/Header';
import Links from './Componentes/links';
import Content1 from './Componentes/Content1';
import Content2 from './Componentes/Content2';
import Content3 from './Componentes/Content3';
import Content4 from './Componentes/Content4';
import Content5 from './Componentes/Content5';
import Footer from './Componentes/Footer';
import imagen1 from './Recursos/icon-brand-recognition.svg';
import imagen2 from './Recursos/icon-detailed-records.svg';
import imagen3 from './Recursos/icon-fully-customizable.svg';

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
        <Links />
        <Content3 />
        <div className="container3">
          <Content4 image={imagen1} title={"Brand Recognition"} text={"Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."}/>          
          <div style={{marginTop: "40px"}}>
            <Content4 image={imagen2} title={"Detailed Records"} text={"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."}/>
          </div>
          <div style={{marginTop: "80px"}}>
            <Content4 image={imagen3} title={"Fully Customizable"} text={"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."}/>
          </div>
        </div>
      </div>
      <div className = "container5">
        <Content5 />
      </div>
      <div className = "container6">
        <Footer />
      </div>
    </div>
  );
}

export default App;
