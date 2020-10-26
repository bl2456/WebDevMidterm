import React from 'react';
import '../../css/Staff.css';
import image1 from '../../media/Staff/edu.jpg';
import image2 from '../../media/Staff/fahmy.jpg';
import image3 from '../../media/Staff/arteta.jpg';
import image4 from '../../media/Staff/steve-round.jpg';
import image5 from '../../media/Staff/stuivenberg.jpg';
import image6 from '../../media/Staff/pavon.jpg';
import image7 from '../../media/Staff/georgson.jpg';
import image8 from '../../media/Staff/molina.jpg';
import image9 from '../../media/Staff/cuesta.jpg';
import image10 from '../../media/Staff/odriscoll.jpg';
import image11 from '../../media/Staff/forsythe.jpg';
import image12 from '../../media/Staff/priestley.jpg';
import image13 from '../../media/Staff/wilson.jpg';
import image14 from '../../media/Staff/reece.png';


const Staff = () => {
    return(
        <div className="staffContent">
            <div className="staffSection">
                <h1>Football Executive</h1>
                <div className="staffFlex">
                    <div className="staffCard">
                        <p className="role">Technical Director</p>
                        <p className="name">Edu</p>
                        <img src={image1}></img>
                        <p className="staffDescription">
                            The Brazilian was part of the Invincibles side and played five seasons for the Gunners. 
                            He returned to the club to take up this new role in July 2019, following three years 
                            as general co-ordinator for the Brazil national team.
                        </p>
                    </div>

                    <div className="staffCard">
                        <p className="role">Director of Football Operations</p>
                        <p className="name">Hussein Fahmy</p>
                        <img src={image2}></img>
                        <p className="staffDescription">
                            Previously Commercial and Business Affairs Director with Team Sky. He joined in June 2017 to 
                            focus on contract negotiations, which had been seen as an area of weakness for the Gunners.
                        </p>
                    </div>
                </div>
            </div>

            <div className="staffSection">
                <h1>Coaching Staff</h1>
                <div className="staffFlex">
                    <div className="staffCard">
                        <p className="role">Manager</p>
                        <p className="name">Mikel Arteta</p>
                        <img src={image3}></img>
                        <p className="staffDescription">
                            Spent five seasons as a player at Arsenal after stints with Rangers and Everton. Brought 
                            to Manchester City by Pep Guardiola in the summer of 2016 after his retirement. He was 
                            appointed Arsenal manager on December 20th 2019, having previously been interviewed for the 
                            job when Unai Emery was chosen.
                        </p>
                    </div>

                    <div className="staffCard">
                        <p className="role">Assistant</p>
                        <p className="name">Steve Round</p>
                        <img src={image4}></img>
                        <p className="staffDescription">
                            Worked with Arteta the player when he was a coach at Everton. Has also coached with Manchester 
                            United and England and was Director of Football at Aston Villa for two years.
                        </p>
                    </div>
                    
                    <div className="staffCard">
                        <p className="role">Assistant</p>
                        <p className="name">Albert Stuivenberg</p>
                        <img src={image5}></img>
                        <p className="staffDescription">
                            He was assistant to Louis Van Gaal at Manchester United and also managed Genk in Belgium. He 
                            will continue to work for Wales alongside manager Ryan Giggs until the end of Euro 2020.
                        </p>
                    </div>

                    <div className="staffCard">
                        <p className="role">Goalkeeping Coach</p>
                        <p className="name">Inaki Cana Pavon</p>
                        <img src={image6}></img>
                        <p className="staffDescription">
                            Joined from Brentford, where he had worked since the summer of 2018, in December 2019. Prior to the 
                            Bees, he was with FC Nordsjælland in Denmark.
                        </p>
                    </div>

                    <div className="staffCard">
                        <p className="role">Assistant</p>
                        <p className="name">Andreas Georgson</p>
                        <img src={image7}></img>
                        <p className="staffDescription">
                            Another appointment from Brentford, joining in August 2020. Was Head of Set Pieces and Individual Development 
                            with the Bees. Worked for Malmo for 14 years prior to moving to England.
                        </p>
                    </div>

                    <div className="staffCard">
                        <p className="role">Assistant</p>
                        <p className="name">Miguel Molina</p>
                        <img src={image8}></img>
                        <p className="staffDescription">
                            Hired from Atletico Madrid. An expert at integrating the physical and mental elements of the 
                            game into training sessions.
                        </p>
                    </div>

                    <div className="staffCard">
                        <p className="role">Assistant</p>
                        <p className="name">Carlos Cuesta</p>
                        <img src={image9}></img>
                        <p className="staffDescription">
                            Only 25, but already a Uefa Pro Licence holder who has worked for Atletico Madrid and Juventus. Got to know Arteta 
                            during a study visit with Manchester City in August 2018.
                        </p>
                    </div>
                </div>
            </div>

            <div className="staffSection">
                <h1>Medical Staff</h1>
                <div className="staffFlex">
                    <div className="staffCard">
                        <p className="role">Head of Medical Services</p>
                        <p className="name">Gary O'Driscoll</p>
                        <img src={image10}></img>
                        <p className="staffDescription">
                            Former Ireland rugby team doctor and a veteran of two British Lions tours. Arsenal doctor since 2009. Promoted to 
                            replace Colin Lewin as Head of Medical in June 2017.
                        </p>
                    </div>

                    <div className="staffCard">
                        <p className="role">Head of Performance</p>
                        <p className="name">Shad Forsythe</p>
                        <img src={image11}></img>
                        <p className="staffDescription">
                            Washington State University graduate worked with German national side for a decade. Hired by Arsenal following 
                            2014 World Cup, which Germany won.
                        </p>
                    </div>

                    <div className="staffCard">
                        <p className="role">Head of Psychology and Personal Development</p>
                        <p className="name">David Priestley</p>
                        <img src={image12}></img>
                        <p className="staffDescription">
                            With Arsenal since July 2014 and responsible for culture, values and the development of a high-performance environment. 
                            Previously spent five years with rugby union side Saracens.
                        </p>
                    </div>

                    <div className="staffCard">
                        <p className="role">Strength and Conditioning Coach</p>
                        <p className="name">Sam Wilson</p>
                        <img src={image13}></img>
                        <p className="staffDescription">
                            Joined Arsenal in 2014. Promoted to the first team at the start of the 2018/19 season.
                        </p>
                    </div>

                    <div className="staffCard">
                        <p className="role">Senior Physio</p>
                        <p className="name">Jordan Reece</p>
                        <img src={image14}></img>
                        <p className="staffDescription">
                            Joined Arsenal Academy in December 2012 from Crystal Palace. Promoted to first team as part of the 
                            big medical revamp in the summer of 2018.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Staff;