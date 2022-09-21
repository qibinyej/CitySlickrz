import React from "react"
import { Link } from "react-router-dom"


 function Navbar() {
    
    
    return (
<ul id="nav-ul">
            <li id="nav-li"><Link to="/login">Home</Link></li>

            <li id="nav-li"><Link>route 1</Link></li>
            <li id="nav-li"><Link>route 2</Link></li>
            <li id="nav-li"><Link>route 3</Link></li>
            <li id="nav-li"><Link>route 4</Link></li>
        </ul>
    )

}

export default Navbar