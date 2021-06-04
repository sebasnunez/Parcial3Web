import React, { Component } from 'react';
import '../App.css';

class App extends Component{
    constructor(){
        super();
        this.state = {
            links: {}
        }
    }

    async componentDidMount(){
        await fetch('links.json').then(response=>{
           return response.json()
        }).then(response => {
            this.setState({links: response})
            console.log(response);
        })
        if(this.state.links.url){
            this.state.links.url.forEach(element => {
                const links = document.getElementById('links');
                links.innerHTML += '<div class="links">'+ element +'<a style="justify-self: end;" href="'+element+'">'+element+'</a><button class="button3"> copiar </button> </div> ';
            });
        }
        
        
    }


    render(){
        return (
            <div id ="links">
                
            </div>
        );
    }
}



export default App;