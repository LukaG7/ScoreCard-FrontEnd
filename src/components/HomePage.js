import golfImage from '../images/golf logo4.png';
import github from '../images/github-logo.png';
import linkedin from '../images/linked-in.png';
import { Routes, Route, Link } from 'react';

import SignUp from './SignUp';
import Login from './Login';

function HomePage(){
    return(
<body className='body'>
        <img className='golf-logo' src={golfImage}/>
    <div className='header'>
        <h1 className='home-title'>Welcome To ScoreCard</h1>
        <button className='scoring-btn'>Start Scoring</button>
    </div>
    <div className='a-tags'>
        <a href='https://github.com/LukaG7' target='_blank'><img className='git-linked-img' src={github}/></a>
        <a href='https://www.linkedin.com/in/lukas-gonzalez-a370b6251/' target='_blank'><img className='git-linked-img' src={linkedin}/></a>
    </div>
</body>
    )
}

export default HomePage;