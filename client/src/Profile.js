import React from "react";
import './profile.css';

import { Component } from "react"



class Profile extends Component {

state = {
    profileImgEmpty:'https://pagesix.com/wp-content/uploads/sites/3/2018/09/gary-busey.jpg?quality=80&strip=all'
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
                    <h1 id="heading">Add your Image</h1>
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