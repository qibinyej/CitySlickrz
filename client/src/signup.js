import React from 'react'
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import './signup.css'


function Signup( {openSignUp, closeSignUp }) {

  




    return (
        <div id='signUp-background'>
            <div id='signUp-container '>
                <div id='signUp-body'> 
                    <button onClick= { () => closeSignUp(false)} id='close-sign'>
                        <strong>X</strong>
                    </button>
                    <form>
                        <input placeholder='First name'></input>
                        <input placeholder='Last name'></input>
                        <input placeholder='Email'></input>
                        <input placeholder='Password'></input>
                        <input placeholder='Location'></input>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Signup