import '../App.css';
import logo from '../Recursos/logo.svg';
function App(){
    return (
        <div className="header">
            <div>
                <img style={{width: '70%'}} src = {logo} alt = "Shortly"/>
            </div>
            <div className = "headerLinks">
                <a href = "./" >Features</a>
                <a href = "./" >Prising</a>
                <a href = "./" >Resources</a>
            </div>
            <div className = "headerButtons">
                <a href = "./" >Login</a>
                <a href = "./" style = {{marginLeft: "40px"}} className = "button">Sign Up</a>
            </div>
        </div>
    );
}

export default App;