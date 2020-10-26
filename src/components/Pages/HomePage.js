import React from 'react';
import {Link} from 'react-router-dom';
import "../../css/HomePage.css";
import image0 from "../../media/Picture1.jpg";
//import image1 from "../../media/Coaches.jpg";
import Button from "../Button";

const HomePage = () => {
    return(
        <div className="pageContainer">
            <div className="welcomeDiv">
                {/*<img src={image0} id="heroImage"></img>*/}
                <div className="welcomeContent">
                    <div className="leftSection">
                        <h1>Welcome to Arsenal</h1>
                        <p>
                            Founded in 1886, Arsenal Football Club is a professional football club based in Islington, London, England, 
                            that plays in the Premier League, the top flight of English football. Feel free to browse.
                        </p>
                    </div>
                    <div className="rightSection">
                        <Button name="History" path="/History" buttonStyle="btn-secondary" buttonSize="btn-large"/>
                        <Button name="Honors" path="/Honors" buttonStyle="btn-secondary" buttonSize="btn-large"/>
                        <Button name="Staff" path="/Staff" buttonStyle="btn-secondary" buttonSize="btn-large"/>
                        <Button name="Team" path="/Team" buttonStyle="btn-secondary" buttonSize="btn-large"/>
                    </div>
                </div>
            </div>
            {/*
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
                    <Link to='/CurrentSeason'>
                        <div className="item3"></div>
                    </Link>
                    <div className="item4"><Link to='/CurrentSeason'></Link></div>
                    <div className="item5"></div>
                </div>
            </div>
            */}
        </div>
    )
}

export default HomePage;