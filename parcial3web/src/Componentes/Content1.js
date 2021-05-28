import '../App.css';
import imagen1 from '../Recursos/illustration-working.svg';


function App(){
    return(
        <div className = "content1">
            <div>
            <h1>More than just shorter links</h1>
            <p>Build your brand’s recognition and get detailed insights 
               on how your links are performing.</p>
               <button className = "button">
                Get Started
                </button>
            </div>       
               
           
            <img style ={{width : '70%', justifySelf: 'end'}} src = {imagen1}></img>
        </div>
    );
}




export default App;