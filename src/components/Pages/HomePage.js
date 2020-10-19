import React from 'react';
import "../../css/HomePage.css";
import image1 from "../../media/Coaches.jpg";
import Button from "../Button";

const HomePage = () => {
    return(
        <>
            <div className="welcomeDiv">
                <div className="welcomeContent">
                    <h1>Welcome to Arsenal</h1>
                    <p>
                        Founded in 1886, Arsenal Football Club is a professional football club based in Islington, London, England, 
                        that plays in the Premier League, the top flight of English football. Feel free to browse.
                    </p>
                    <Button name="News" path="/News" buttonStyle="btn-secondary" buttonSize="btn-large"/>
                    <Button name="History" path="/History" buttonStyle="btn-secondary" buttonSize="btn-large"/>
                    <Button name="Honors" path="/Honors" buttonStyle="btn-secondary" buttonSize="btn-large"/>
                </div>
            </div>
            <div className="homeContentDiv">
                <div className="homeGrid">
                    <div className="item1">
                        <div className="item1picture">
                            <img src={image1}></img>
                        </div>
                        <div className="item1content">
                            <div className="item1description">
                                Handpicked by Club Manager Mikel Arteta, the backroom staff contains a mixture of 
                                youth and experienced ready to spearhead Arsenal into a top-4 finish in the current 
                                2020/21 season.
                            </div>
                            <Button name="Learn More" path="/Staff" buttonStyle="btn-primary"/>
                        </div>
                    </div>
                    <div className="item2">
                        <Button name="Meet the Players" path="/Team" buttonStyle="btn-secondary"/>
                    </div>
                    <div className="item3"></div>
                    <div className="item4"></div>
                    <div className="item5"></div>
                </div>
            </div>
        </>
    )
}

export default HomePage;