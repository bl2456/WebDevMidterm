import React from 'react';
import '../../css/Honors.css';
import image1 from '../../media/champions_2004.jpg';
import image2 from '../../media/facupwin_2020.jpg';
import image3 from '../../media/leaguecup_1993.jpg';
import image4 from '../../media/fairs_cup.jpg';
import image5 from '../../media/cupwinnerscup_1994.jpg';
import image6 from '../../media/communityshield_2017.jpg';

const Honors = () => {
    return(
        <div className="honorsContainer">
            <div className="honorContainer">
                <h1>League Titles (13)</h1>
                <p>1930/31, 1932/33, 1933/34, 1934/35, 1937/38, 1947/48, 1952/53, 1970/71, 1988/89, 1990/91, 1997/98, 2001/02, 2003/04</p>
                <img src={image1}></img>
            </div>

            <div className="honorContainer">
                <h1>FA Cup Winners (14)</h1>
                <p>1929/30, 1935/36, 1949/50, 1970/71, 1978/79, 1992/93, 1997/98, 2001/2002, 2002/03, 2004/05, 2013/14, 2014/15, 2016/17, 2019/20</p>
                <img src={image2}></img>
            </div>

            <div className="honorContainer">
                <h1>League Cup Winners (2)</h1>
                <p>1987/88, 1992/93</p>
                <img src={image3}></img>
            </div>

            <div className="honorContainer">
                <h1>European Fairs Cup Winners (1)</h1>
                <p>1969/70</p>
                <img src={image4}></img>
            </div>

            <div className="honorContainer">
                <h1>European Cup Winners Cup (1)</h1>
                <p>1993/94</p>
                <img src={image5}></img>
            </div>

            <div className="honorContainer">
                <h1>Community Sheild Winners (16)</h1>
                <p>1930, 1931, 1933, 1934, 1938, 1948, 1953, 1991, 1998, 1999, 2002, 2004, 2014, 2015, 2017, 2020</p>
                <img src={image6}></img>
            </div>
        </div>
    )
}

export default Honors;