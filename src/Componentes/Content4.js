import '../App.css';

function App(props){
    return(
        <div className="content4">
            <div>
                <div>
                    <img src ={props.image}/>
                </div>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default App;