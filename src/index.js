import React, { Component } from 'react';
import {render} from 'react-dom';
import './index.css';
import './css/style.css';
import {Router, Link} from "@reach/router";
import Image from "react-image";

const App = ()=>{
    return (
        <div>
            <nav className="menu">
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="page1">Página 1</Link></li>
                    <li><Link to="page2">Página 2</Link></li>
                </ul>
            </nav>

            <Router>
                <Inicio path="/" />
                <P1 path="page1" />
                <P2 path="page2" />
            </Router>
        </div>
    )
}
    
const Inicio = () =>{
    return(
        <div>
            <h2>Estas en inicio</h2>
            <Image className="img" src={require('./img/gato.jpg')}/>
        </div>
    )
}
const P1 = () =>{
    return (
        <div>
            <h2>Estas en Página 1</h2>
            <Image className="img" src={require('./img/monumentos-china.jpg')}/>
        </div>
    )
}
const P2 = () =>{
    return (
        <div>
            <h2>Estas en Página 2</h2>
            <Image className="img" src={require('./img/puerta_cielo.jpg')}/>
        </div>
    )
}
    
    
render(<App />, document.getElementById('root'));