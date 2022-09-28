import React from "react"
import { Link } from "react-router-dom"
import './navbar.css';



function Navbar() {


    return (<nav id="nav">

        <ul id="nav-ul">
            <li id="nav-li"><Link to="/">Login</Link></li>
            <li id="nav-li"><Link to="home">Home</Link></li>
            <li id="nav-li"><Link>route 2</Link></li>
            <li id="nav-li"><Link>route 3</Link></li>
            <li id="nav-li"><Link>route 4</Link></li>
        </ul>
    </nav>
    )

}

export default Navbar