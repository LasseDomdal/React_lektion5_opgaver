import React from "react";
import {Link} from "react-router-dom";
import Logo from './home button.jpg';
import './Header.css';

function Header(props) {
    return (<div
        className="Header"><h1>Header</h1>
        <Link to="/"><img className="logo" src={Logo}/></Link>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/signup"><button>Signup</button></Link>
        <Link to="/about"><button>about</button></Link>

    </div>)
}

export default Header