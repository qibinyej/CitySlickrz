import React from "react";
import './login.css';
import { useState } from "react";
import Signup from "./signup";


function Login() {


        const [openSignUp, setOpenSignUp] = useState(false)




        return (
                <div id="login-parent">
                        {openSignUp && <Signup openSignUp={ openSignUp } closeSignUp ={ setOpenSignUp }/>}
                        <video id="login-backgound-vid" loop autoPlay muted>
                                <source src="https://player.vimeo.com/progressive_redirect/playback/712741455/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=1d32f61a841a2f36d5d2524755d5e38b4ca2c2964089ca5edeeb5d4db1b062a8" type="video/mp4"></source>
                        </video>
                        <div id="login-credentials-div">
                                <h1 id="siteTitle">CitySlickrz</h1>
                                <h3 id="header">Don't have a profile? <strong onClick={() => {setOpenSignUp(true)}} style={{ color: 'blue', cursor: 'pointer' }}>Sign Up</strong> </h3>
                                <form>
                                        <input required id="input" placeholder="Username"></input>
                                        <input required id="input" placeholder="Password" type="password"></input>
                                        <button id="submit-btn">Login</button>

                                </form>

                        </div>

                </div>
        )

}

export default Login