import React from "react";
import './login.css';

function Login() {




        return (
                <div id="login-parent">


                        <video id="login-backgound-vid" loop autoPlay muted>
                                <source src="https://player.vimeo.com/progressive_redirect/playback/712741455/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=1d32f61a841a2f36d5d2524755d5e38b4ca2c2964089ca5edeeb5d4db1b062a8" type="video/mp4"></source>
                        </video>
                        {/* Options for background videos */}
                        {/* https://player.vimeo.com/external/477151244.sd.mp4?s=5db417485e8c1a319f4379acb577a5fde75384a4&profile_id=164&oauth2_token_id=57447761 */}
                        {/* https://player.vimeo.com/external/468388169.sd.mp4?s=8843096bc04ccffbbe7702737e6e0be54b8f2c48&profile_id=164&oauth2_token_id=57447761*/}
                        {/* https://player.vimeo.com/progressive_redirect/playback/712741455/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=1d32f61a841a2f36d5d2524755d5e38b4ca2c2964089ca5edeeb5d4db1b062a8 */}
                        {/* https://player.vimeo.com/external/370845105.sd.mp4?s=b9419e54cff17ff6aec0f50e194d3e4e92a06129&profile_id=164&oauth2_token_id=57447761 */}
                        <div id="login-credentials-div">
                        <form>
                                <input required id="input" placeholder="Username"></input>
                                <input required id="input" placeholder="Password" type="password"></input>
                        </form>
                        </div>
                </div>
        )

}

export default Login