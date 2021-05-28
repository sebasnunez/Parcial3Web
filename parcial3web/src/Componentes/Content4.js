import imagen1 from '../Recursos/icon-brand-recognition.svg';
import imagen2 from '../Recursos/icon-detailed-records.svg';
import imagen3 from '../Recursos/icon-fully-customizable.svg';

import '../App.css';

function App(){
    return(
        <div className="content4">
            <div>
                <div>
                    <img src ={imagen1}/>
                </div>
                <h3>Brand Recognition</h3>
                <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
            </div>
            <div style ={{marginTop: '60px'}}>
                <div>
                    <img src ={imagen2}/>
                </div>
                <h3>Detailed Records</h3>
                <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
            </div>
            <div style ={{marginTop: '100px'}}>
                <div>
                    <img src ={imagen3}/>
                </div>
                 <h3>Fully Customizable</h3>
                 <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
            </div>
        </div>
    );
}

export default App;