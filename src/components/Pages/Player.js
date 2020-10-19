import React from 'react';
import "../../css/Player.css";


const Player = (props) => {
    console.log(props.location.state);
    return(
        <div className="playerContainer">
            <div className="playerBox">
                <div className="playerPicture">
                    <img src={props.location.state.image}/>
                </div>
                <div className="playerDescription">
                    <div className="descriptionItem">
                        <div className="descriptionItemName">
                            Name:
                        </div>
                        <div className="descriptionItemContent">
                            {props.location.state.playerInfo.firstName} {props.location.state.playerInfo.lastName}
                        </div>
                    </div>
                    <div className="descriptionItem">
                        <div className="descriptionItemName">
                            Country:
                        </div>
                        <div className="descriptionItemContent">
                            {props.location.state.playerInfo.country}
                        </div>
                    </div>
                    <div className="descriptionItem">
                        <div className="descriptionItemName">
                            Number:
                        </div>
                        <div className="descriptionItemContent">
                            {props.location.state.playerInfo.teamNumber}
                        </div>
                    </div>
                    <div className="descriptionSummary">
                        {props.location.state.playerInfo.description}
                    </div>

                </div>
            </div>
        </div>
        
    )
}


export default Player;

