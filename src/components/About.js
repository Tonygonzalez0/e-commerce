import React, { Component } from "react";
import Img2 from '../Img/tumblr_navhtmms171rupgj7o1_500-e1469508147554.jpg'; 

class About extends Component{
    render(){
        return(
            <div className='Main--About__container'>
                <h1 className="Main--header__style">About our History</h1>
                <img src={Img2} alt="The Rock" className="About--img__style"/>
                <p className="About--Paragraph__style"> We were started by Dwayne Johson aka The Rock in 2000. With one simple goal to bring quality rocks to the market at simple prices. These Rocks are organic and all natural and brought from the Bikini Bottom, making them one of a kind.</p>
            </div>
        )
    }
};

export default About;