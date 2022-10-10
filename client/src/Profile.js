import React from "react";
import './profile.css';
import { useState } from "react"



function Profile() {

    const [text, setText] = useState("")
  
    const placeCaps = (e, otherParam) => {setText(e.target.value.toUpperCase())}
  





    return (

        <div id='profile-parent-div'>
             <form>
     <input onChange={placeCaps} ></input>
   </form>
   <h3>{text}</h3>

                <div id="container">
                    <h1 id="heading">Add your Image</h1>
                    <div id="imgHolder">
                    </div>
                </div>
        </div>

    )
}

export default Profile