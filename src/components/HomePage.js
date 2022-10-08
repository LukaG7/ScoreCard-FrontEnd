import golfImage from '../images/golf logo4.png'

function HomePage(){
    return(
<body className='body'>
        <img className='golf-logo' src={golfImage}/>
    <div className='header'>
        <h1 className='home-title'>Welcome To ScoreCard</h1>
        <button className='scoring-btn'>Start Scoring</button>
    </div>
    <div className='a-tags'>
        <a href='https://github.com/LukaG7' target='_blank'><button className>GitHub</button></a>
        <a href='https://www.linkedin.com/in/lukas-gonzalez-a370b6251/' target='_blank'><button>LinkedIn</button></a>
    </div>
</body>
    )
}

export default HomePage;