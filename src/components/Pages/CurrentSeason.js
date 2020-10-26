import React from 'react';
import "../../css/CurrentSeason.css";
const premTeamStats = [
    {
        name: "Everton",
        gamesPlayed: 6,
        gamesWon: 4,
        gamesDrawn: 1,
        gamesLost: 1,
        goalsFor: 14,
        goalsAgainst: 9,
    },

    {
        name: "Liverpool",
        gamesPlayed: 6,
        gamesWon: 4,
        gamesDrawn: 1,
        gamesLost: 1,
        goalsFor: 15,
        goalsAgainst: 14,
    },

    {
        name: "Aston Villa",
        gamesPlayed: 5,
        gamesWon: 4,
        gamesDrawn: 0,
        gamesLost: 1,
        goalsFor: 12,
        goalsAgainst: 5,
    },

    {
        name: "Leeds United",
        gamesPlayed: 6,
        gamesWon: 3,
        gamesDrawn: 1,
        gamesLost: 2,
        goalsFor: 12,
        goalsAgainst: 9,
    },

    {
        name: "Southampton",
        gamesPlayed: 6,
        gamesWon: 3,
        gamesDrawn: 1,
        gamesLost: 2,
        goalsFor: 10,
        goalsAgainst: 9,
    },
    
    {
        name: "Crystal Palace",
        gamesPlayed: 6,
        gamesWon: 3,
        gamesDrawn: 1,
        gamesLost: 2,
        goalsFor: 8,
        goalsAgainst: 9,
    },

    {
        name: "Wolverhampton Wanderers",
        gamesPlayed: 6,
        gamesWon: 3,
        gamesDrawn: 1,
        gamesLost: 2,
        goalsFor: 6,
        goalsAgainst: 8,
    },

    {
        name: "Chelsea",
        gamesPlayed: 6,
        gamesWon: 2,
        gamesDrawn: 3,
        gamesLost: 1,
        goalsFor: 13,
        goalsAgainst: 9,
    },

    {
        name: "Leicester",
        gamesPlayed: 5,
        gamesWon: 3,
        gamesDrawn: 0,
        gamesLost: 2,
        goalsFor: 12,
        goalsAgainst: 8,
    },

    {
        name: "Arsenal",
        gamesPlayed: 5,
        gamesWon: 3,
        gamesDrawn: 0,
        gamesLost: 2,
        goalsFor: 8,
        goalsAgainst: 6,
    },

    {
        name: "Tottenham Hotspur",
        gamesPlayed: 5,
        gamesWon: 2,
        gamesDrawn: 2,
        gamesLost: 1,
        goalsFor: 15,
        goalsAgainst: 8,
    },

    {
        name: "West Ham United",
        gamesPlayed: 6,
        gamesWon: 2,
        gamesDrawn: 2,
        gamesLost: 2,
        goalsFor: 12,
        goalsAgainst: 8,
    },

    {
        name: "Manchester City",
        gamesPlayed: 5,
        gamesWon: 2,
        gamesDrawn: 2,
        gamesLost: 1,
        goalsFor: 8,
        goalsAgainst: 8,
    },

    {
        name: "Newcastle United",
        gamesPlayed: 6,
        gamesWon: 2,
        gamesDrawn: 2,
        gamesLost: 2,
        goalsFor: 8,
        goalsAgainst: 10,
    },

    {
        name: "Manchester United",
        gamesPlayed: 5,
        gamesWon: 2,
        gamesDrawn: 1,
        gamesLost: 2,
        goalsFor: 9,
        goalsAgainst: 12,
    },

    {
        name: "Brighton and Hove Albion",
        gamesPlayed: 5,
        gamesWon: 1,
        gamesDrawn: 1,
        gamesLost: 3,
        goalsFor: 9,
        goalsAgainst: 11,
    },

    {
        name: "West Bromwich Albion",
        gamesPlayed: 5,
        gamesWon: 0,
        gamesDrawn: 2,
        gamesLost: 3,
        goalsFor: 5,
        goalsAgainst: 13,
    },

    {
        name: "Burnley",
        gamesPlayed: 4,
        gamesWon: 0,
        gamesDrawn: 1,
        gamesLost: 3,
        goalsFor: 3,
        goalsAgainst: 8,
    },

    {
        name: "Sheffield United",
        gamesPlayed: 6,
        gamesWon: 0,
        gamesDrawn: 1,
        gamesLost: 5,
        goalsFor: 3,
        goalsAgainst: 9,
    },

    {
        name: "Fulham",
        gamesPlayed: 6,
        gamesWon: 0,
        gamesDrawn: 1,
        gamesLost: 5,
        goalsFor: 5,
        goalsAgainst: 14,
    },
]

const europaTeamStats = [
    {
        name: "Arsenal",
        gamesPlayed: 1,
        gamesWon: 1,
        gamesDrawn: 0,
        gamesLost: 0,
        goalsFor: 2,
        goalsAgainst: 1,
    },

    {
        name: "Molde",
        gamesPlayed: 1,
        gamesWon: 1,
        gamesDrawn: 0,
        gamesLost: 0,
        goalsFor: 2,
        goalsAgainst: 1,
    },

    {
        name: "Dundalk",
        gamesPlayed: 1,
        gamesWon: 0,
        gamesDrawn: 0,
        gamesLost: 1,
        goalsFor: 1,
        goalsAgainst: 2,
    },

    {
        name: "Rapid Wien",
        gamesPlayed: 1,
        gamesWon: 0,
        gamesDrawn: 0,
        gamesLost: 1,
        goalsFor: 1,
        goalsAgainst: 2,
    },  
]
const calculatePoints = (gamesWon, gamesDrawn) => {
    return gamesWon * 3 + gamesDrawn;
}

const calculatePosition = (teamStats) => {
    const newList = [];
    teamStats.forEach(team => {
        const points = calculatePoints(team.gamesWon, team.gamesDrawn);
        const goalDifference = team.goalsFor - team.goalsAgainst;
        team["points"] = points;
        team["goalDifference"] = goalDifference;
        newList.push(team);
    });
    newList.sort((a,b) => (a.points > b.points) ? -1 : (a.points === b.points) ? ((a.goalDifference > b.goalDifference) ? -1 : 1) : 1);
    return newList;
}

const CurrentSeason = () => {
    return(
        <div className="seasonContainer">
            <div class="premierLeagueContainer">
                <h1 className="tableHeading">Premier League Standings</h1>
                <table class="premierLeagueTable">
                    <tbody>
                        <tr>
                            <th>Position</th>
                            <th>Club</th>
                            <th>Played</th>
                            <th>Won</th>
                            <th>Drawn</th>
                            <th>Lost</th>
                            <th>GF</th>
                            <th>GA</th>
                            <th>GD</th>
                            <th>Points</th>
                        </tr>
                        {calculatePosition(premTeamStats).map((team,index)=> {
                            return(
                                <tr key={index + 1} id={(team.name === "Arsenal") ? 'arsenalRow': `position${index+1}`}>
                                    <td>{index + 1}</td>
                                    <td>{team.name}</td>
                                    <td>{team.gamesPlayed}</td>
                                    <td>{team.gamesWon}</td>
                                    <td>{team.gamesDrawn}</td>
                                    <td>{team.gamesLost}</td>
                                    <td>{team.goalsFor}</td>
                                    <td>{team.goalsAgainst}</td>
                                    <td>{team.goalDifference}</td>
                                    <td>{team.points}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div class="europaLeagueContainer">
                <h1 className="tableHeading">Europa League Group B Standings</h1>
                <table class="europaLeagueTable">
                    <tbody>
                        <tr>
                            <th>Position</th>
                            <th>Club</th>
                            <th>Played</th>
                            <th>Won</th>
                            <th>Drawn</th>
                            <th>Lost</th>
                            <th>GF</th>
                            <th>GA</th>
                            <th>GD</th>
                            <th>Points</th>
                        </tr>
                        {calculatePosition(europaTeamStats).map((team,index)=> {
                            return(
                                <tr key={index + 1} id={(team.name === "Arsenal") ? 'arsenalRow': `positionE${index+1}`}>
                                    <td>{index + 1}</td>
                                    <td>{team.name}</td>
                                    <td>{team.gamesPlayed}</td>
                                    <td>{team.gamesWon}</td>
                                    <td>{team.gamesDrawn}</td>
                                    <td>{team.gamesLost}</td>
                                    <td>{team.goalsFor}</td>
                                    <td>{team.goalsAgainst}</td>
                                    <td>{team.goalDifference}</td>
                                    <td>{team.points}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CurrentSeason;