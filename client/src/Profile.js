import React from "react";
import './profile.css';

import { Component } from "react"



class Profile extends Component {

state = {
    profileImgEmpty:'https://i1.sndcdn.com/artworks-000601335880-9f2iwn-t500x500.jpg'
}


render(){    
    const {profileImgEmpty} = this.state
    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2){
                this.setState({profileImgEmpty:reader.result})
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }
    return (
        <div id='profile-parent-div'>
  
                <div id="container">
                    <h1 id="heading"> Add a profile picture</h1>
                    <div id="imgHolder">
                        <img src={profileImgEmpty} alt="img" id="img"></img>
                    </div>
                <input type="file" name="image-upload" id="input" accept="image/*" onChange={imageHandler}/>
                <div className="label">
                    <label htmlFor="input" className="image"></label>
                </div>
                </div>
        </div>

    )
}
}

export default Profile