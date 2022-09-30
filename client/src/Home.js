import React from "react"
import './homepage.css';

function Home(){


return (
<div className="home-page">
    <div id="welcome">
        <h1>
        Welcome City Slickr!
        </h1>
        
    
    </div>
    <img id="home-photo" src="https://photostorage.explorest.com/usa/hawaii/vlim-mai-poina-palmtree-feed.jpg"></img>
    {/* Possible Homepage top 10 US cities to live in. Have a hover, bounce effect, etc. */}
    <div className="city-container">
        <div class="city1">City 1</div>
        <div class="city2">City 2</div>
        <div class="city3">City 3</div>
        <div class="city4">City 4</div>
        <div class="city5">City 5</div>
        <div class="city6">City 6</div>
        <div class="city7">City 7</div>
        <div class="city8">City 8</div>
        <div class="city9">City 9</div>
        <div class="city10">City 10</div>
    </div>
</div>
)
}

export default Home;