import React from 'react';
import "../../css/Team.css";
import {Link} from 'react-router-dom';


const goalkeepers = [
    {
        firstName:"Bernd",
        lastName:"Leno",
        matchName: "Leno",
        description: "Highly-rated goalkeeper Bernd joined us from Bayer Leverkusen in June 2018, having made more than 230 appearances for the Bundesliga side and being capped by Germany at senior level.",
        country: "Germany",
        teamNumber: "1",
    },
    {
        firstName:"Runar Alex",
        lastName:"Runarsson",
        matchName: "Runarsson",
        description: "The Iceland international started his career with KR Reykjavik in his home country. He went on to join FC Nordsjaelland in Denmark, where he made 62 appearances during a three-year spell, before moving to Dijon. He joined us in September 2020",
        country: "Iceland",
        teamNumber: "13",
    },
    {
        firstName:"Matt",
        lastName:"Macey",
        matchName: "Macey",
        description: "The 6ft 7in keeper appeared twice for the first team last season, keeping a clean sheet on an impressive debut against Red Star Belgrade in the Europa League.",
        country: "England",
        teamNumber: "33",
    },
]

const defenders = [
    {
        firstName:"Hector",
        lastName:"Bellerin",
        matchName: "Bellerin",
        description: "Having previously played for Barcelona's youth teams, Hector joined us as a scholar in 2011 and impressed in the academy before making his first-team debut, aged 18, in the 2013 League Cup. He has since gone on to lift two Emirates FA Cups.",
        country: "Spain",
        teamNumber: "2",
    },
    {
        firstName:"Kieran",
        lastName:"Tierney",
        matchName: "Tierney",
        description: "Scotland international Kieran joined us on deadline day in the summer transfer window of 2019. Kieran joined us from his boyhood club, Celtic, where he made 170 appearances.",
        country: "Scotland",
        teamNumber: "3",
    },
    {
        firstName:"William",
        lastName:"Saliba",
        matchName: "Saliba",
        description: "French defender William Saliba joined us from Saint-Etienne in July 2019. The highly rated young prospect is a France Under-20 international",
        country: "France",
        teamNumber: "4",
    },
    {
        firstName:"Sokratis",
        lastName:"Papastathopoulos",
        matchName: "Sokratis",
        description: "Greek international Sokratis joined us in July 2018 from Borussia Dortmund, where he won the German Cup in 2017.",
        country: "Greece",
        teamNumber: "5",
    },
    {
        firstName:"Gabriel",
        lastName:"Magalhaes",
        matchName: "Gabriel",
        description: "Central defender Gabriel joined us from French side Lille on a long-term contract in September 2020. He has started every league game this season.",
        country: "Brazil",
        teamNumber: "6",
    },
    {
        firstName:"Rob",
        lastName:"Holding",
        matchName: "Holding",
        description: "Rob joined from Championship side Bolton Wanderers in the summer of 2016, and has since gone on to star in the Emirates FA Cup final of 2017, when we beat Chelsea 2-1 to lift the trophy.",
        country: "England",
        teamNumber: "16",
    },
    {
        firstName:"Cedric",
        lastName:"Soares",
        matchName: "Cedric",
        description: "An experienced international, Cedric has made 33 appearances for his country. He featured in the 2018 World Cup and was also part of the Portugal squad that won Euro 2016.",
        country: "Portugal",
        teamNumber: "17",
    },
    {
        firstName:"Shkodran",
        lastName:"Mustafi",
        matchName: "Mustafi",
        description: "World Cup winner Shkodran joined us from Valencia in August 2016, and has become a key part of our backline in his time at the club.",
        country: "Germany",
        teamNumber: "20",
    },
    {
        firstName:"Calum",
        lastName:"Chambers",
        matchName: "Chambers",
        description: "England defender Calum began his career at local club Southampton, before joining us in the summer of 2014.",
        country: "England",
        teamNumber: "21",
    },
    {
        firstName:"Pablo",
        lastName:"Mari",
        matchName: "Mari",
        description: "Spanish defender Pablo joined us on loan from Flamengo in January 2020. The centre back helped the Rio de Janeiro based team win the Brazilian Serie A title and the Copa Libertadores last year.",
        country: "Spain",
        teamNumber: "22",
    },
    {
        firstName:"David",
        lastName:"Luiz",
        matchName: "Luiz",
        description: "David Luiz joined us on deadline day in the summer transfer window of 2019. The 32-year-old centre back arrived with a wealth of experience, having made 524 club appearances in a career spanning 13 seasons.",
        country: "Brazil",
        teamNumber: "23",
    },
    {
        firstName:"Konstantinos",
        lastName:"Mavropanos",
        matchName: "Mavropanos",
        description: "Born in Athens, Greece, Mavropanos joined us in the January transfer window, making him our first signing of 2018.",
        country: "Greece",
        teamNumber: "29",
    },
    {
        firstName:"Sead",
        lastName:"Kolasinac",
        matchName: "Kolasinac",
        description: "Bosnia and Herzegovina international Sead joined us in June 2017 on a long-term contract, arriving from Schalke 04 in the Bundesliga. He is considered one of the strongest players on the team.",
        country: "Bosnia and Herzegovina",
        teamNumber: "31",
    },
]

const midfielders = [
    {
        firstName:"Bukayo",
        lastName:"Saka",
        matchName: "Saka",
        description: "Bukayo started 2018/19 with our under-18s, but by the end of the season he became a star for our under-23s and made his first team debut at Emirates Stadium - all at just 17 years of age.",
        country: "England",
        teamNumber: "7",
    },
    {
        firstName:"Dani",
        lastName:"Ceballos",
        matchName: "Ceballos",
        description: "Spanish midfielder Dani joined us on a season-long loan from Real Madrid in July 2019 - before returning on loan again in September 2020.",
        country: "Spain",
        teamNumber: "8",
    },
    {
        firstName:"Mesut",
        lastName:"Ozil",
        matchName: "Ozil",
        description: "Since arriving in the Premier League from Real Madrid in 2013, Mesut has created more chances than any other player, and contributed the most assists.",
        country: "Germany",
        teamNumber: "10",
    },
    {
        firstName:"Lucas",
        lastName:"Torreira",
        matchName: "Torreira",
        description: "Uruguay midfielder Lucas joined us from Sampdoria in July 2018, after helping his country reach the World Cup quarter-finals in Russia.",
        country: "Uruguay",
        teamNumber: "11",
    },
    {
        firstName:"Ainsley",
        lastName:"Maitland-Niles",
        matchName: "Maitland-Niles",
        description: "Versatile midfielder Ainsley was promoted to the first-team squad last season after some impressive cameo appearances - and has gone on to make a big impression in a number of positions.",
        country: "England",
        teamNumber: "15",
    },
    {
        firstName:"Thomas",
        lastName:"Partey",
        matchName: "Partey",
        description: "Thomas joined us in October 2020 on a long-term contract. The 27-year-old midfielder had been with Atletico since 2012, making 188 appearances, in which time he won both the Europa League and Super Cup in 2018, and was a Champions League runner-up in 2016. ",
        country: "Ghana",
        teamNumber: "18",
    },
    {
        firstName:"Mohamed",
        lastName:"Elneny",
        matchName: "Elneny",
        description: "A full Egypt international since 2011, Mo joined the club from Swiss champions FC Basel, where he made nearly 100 league appearances and won the Super League in three consecutive seasons from 2013 to 2015 before making the switch to north London in January 2016.",
        country: "Egypt",
        teamNumber: "25",
    },
    {
        firstName:"Joe",
        lastName:"Willock",
        matchName: "Willock",
        description: "A box-to-box midfielder who glides effortlessly with the ball at his feet, Joe enjoyed a stunning breakthrough season last year, making 11 appearances for the first team.",
        country: "England",
        teamNumber: "28",
    },
    {
        firstName:"Matteo",
        lastName:"Guendouzi",
        matchName: "Guendouzi",
        description: "Young midfielder Matteo joined us from Ligue 2 side Lorient in July 2018, following an impressive breakthrough season in France.",
        country: "France",
        teamNumber: "29",
    },
    {
        firstName:"Emile",
        lastName:"Smith-Rowe",
        matchName: "Smith-Rowe",
        description: "A highly-rated midfielder that looks to orchestrate every attack, Emile has caught the eye at first-team level.",
        country: "England",
        teamNumber: "32",
    },
    {
        firstName:"Granit",
        lastName:"Xhaka",
        matchName: "Xhaka",
        description: "Central midfielder Granit joined the club from Borussia Monchengladbach in May 2016 and has gone on to establish himself as a key member of our midfield.",
        country: "Switzerland",
        teamNumber: "34",
    },
]

const forwards = [
    {
        firstName:"Alexandre",
        lastName:"Lacazette",
        matchName: "Lacazette",
        description: "France international Alex joined us from Lyon in July 2017 and scored 17 goals in his first season with us.",
        country: "France",
        teamNumber: "9",
    },
    {
        firstName:"Willian",
        lastName:"Borges da Silva",
        matchName: "Willian",
        description: "Experienced Brazil international Willian joined us on a free transfer from Chelsea in August 2020.",
        country: "Brazil",
        teamNumber: "12",
    },
    {
        firstName:"Pierre-Emerick",
        lastName:"Aubameyang",
        matchName: "Aubameyang",
        description: "Pierre-Emerick Aubameyang joined us from Borussia Dortmund in January 2018 for a club-record fee - and was top-scorer in the league in 2019.",
        country: "Gabon",
        teamNumber: "14",
    },
    {
        firstName:"Nicolas",
        lastName:"Pepe",
        matchName: "Pepe",
        description: "Winger Nicolas became our club-record signing after joining us from Ligue 1 club Lille in August 2019. The Ivory Coast international made his breakthrough at Angers, before scoring 37 goals in 79 appearances for Lille. He joined us after helping his country reach the 2019 Africa Cup of Nations quarter-finals in Egypt.",
        country: "Ivory Coast",
        teamNumber: "19",
    },
    {
        firstName:"Reiss",
        lastName:"Nelson",
        matchName: "Nelson",
        description: "An exciting prospect with quick feet and an eye for goal, 2017/18 proved valuable for Reiss’s development, as he made his first-team debut in the Community Shield win over Chelsea, then featured in the Premier League, Europa League, FA Cup and EFL Cup.",
        country: "England",
        teamNumber: "24",
    },
    {
        firstName:"Eddie",
        lastName:"Nketiah",
        matchName: "Nketiah",
        description: "After scoring 24 goals in consecutive seasons at youth level, Eddie made his mark on the first team in 2017/18, with a matchwinning brace during his home debut against Norwich City in the Carabao Cup.",
        country: "England",
        teamNumber: "30",
    },
    {
        firstName:"Gabriel",
        lastName:"Martinelli",
        matchName: "Martinelli",
        description: "Brazilian forward Gabriel joined us from Ituano Futebal Clube on a long-term contract in July 2019, after scoring 10 goals in 34 appearances for the Sao Paulo-based club.",
        country: "Brazil",
        teamNumber: "35",
    },
    
]

function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { 
        images[item.replace('./', '')] = r(item);
        console.log(item);
    });
    return images;
}

const images = importAll(require.context('../../media/Players', false, /\.jpg/));



const Team = () => {
    return(
        <div className="teamContent">
            <h1 className="positionHeader">Goalkeepers</h1>
            <div className="playerGrid">
                {goalkeepers.map((player, index) => {
                    return(
                        <div className="playerCard" 
                            style={{backgroundImage: `url(${images[`${player.matchName}.jpg`]})`}} 
                            key={index}>
                            
                            <Link to={{
                                pathname:'/Player',
                                state: {
                                    playerInfo: player,
                                    image: images[`${player.matchName}.jpg`],
                                }
                            }} className="cardLink" key={index}>
                                <div className="cardContentWrapper">
                                    <div className="cardDescriptionBox">
                                        <div className="cardPlayerName">
                                            {player.matchName}
                                        </div>
                                        <div className="cardPlayerNumber">
                                            {player.teamNumber}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        
                    )
                })}
            </div>
            <h1 className="positionHeader">Defenders</h1>
            <div className="playerGrid">
                {defenders.map((player, index) => {
                    return(
                        <div className="playerCard" 
                            style={{backgroundImage: `url(${images[`${player.matchName}.jpg`]})`}} 
                            key={index}>
                            
                            <Link to={{
                                pathname:'/Player',
                                state: {
                                    playerInfo: player,
                                    image: images[`${player.matchName}.jpg`],
                                }
                            }} className="cardLink" key={index}>
                                <div className="cardContentWrapper">
                                    <div className="cardDescriptionBox">
                                        <div className="cardPlayerName">
                                            {player.matchName}
                                        </div>
                                        <div className="cardPlayerNumber">
                                            {player.teamNumber}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
            <h1 className="positionHeader">Midfielders</h1>
            <div className="playerGrid">
                {midfielders.map((player, index) => {
                    return(
                        <div className="playerCard" 
                            style={{backgroundImage: `url(${images[`${player.matchName}.jpg`]})`}} 
                            key={index}>
                            
                            <Link to={{
                                pathname:'/Player',
                                state: {
                                    playerInfo: player,
                                    image: images[`${player.matchName}.jpg`],
                                }
                            }} className="cardLink" key={index}>
                                <div className="cardContentWrapper">
                                    <div className="cardDescriptionBox">
                                        <div className="cardPlayerName">
                                            {player.matchName}
                                        </div>
                                        <div className="cardPlayerNumber">
                                            {player.teamNumber}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
            <h1 className="positionHeader">Forwards</h1>
            <div className="playerGrid">
                {forwards.map((player, index) => {
                    return(
                        <div className="playerCard" 
                            style={{backgroundImage: `url(${images[`${player.matchName}.jpg`]})`}} 
                            key={index}>
                            
                            <Link to={{
                                pathname:'/Player',
                                state: {
                                    playerInfo: player,
                                    image: images[`${player.matchName}.jpg`],
                                }
                            }} className="cardLink" key={index}>
                                <div className="cardContentWrapper">
                                    <div className="cardDescriptionBox">
                                        <div className="cardPlayerName">
                                            {player.matchName}
                                        </div>
                                        <div className="cardPlayerNumber">
                                            {player.teamNumber}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
        
    )
}

export default Team;