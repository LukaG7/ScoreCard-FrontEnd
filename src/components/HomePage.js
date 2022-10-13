import { Link } from 'react-router-dom';

function HomePage(){
    return(
<div>
    <div className='header'>
        <h1 className='home-title'>Welcome To ScoreCard</h1>
        <Link to='/scoring'><button className='scoring-btn'>Start Scoring</button></Link>
    </div>
</div>
    )
}

export default HomePage;