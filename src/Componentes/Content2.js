import fs from 'fs-react';
import '../App.css';


function App(){
    const guardarLinks =() =>{

    }
    
    return(
        <div className = "content2">
            <input id="link" placeholder="Shorten a link here...">
            </input>
            <button type = "button" onClick = {guardarLinks} className = "button2">
            ShortenIt!
            </button>
        </div>
    );
}

export default App;