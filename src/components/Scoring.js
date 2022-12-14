import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";

function Scoring(){

    const [ courseArray, setCourseArray ] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/createcourse/all`)
        .then(axiosRes => {
            console.log(axiosRes.data)
            setCourseArray(axiosRes.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    // const { paramsId } = useParams();
    // console.log('my params id is ', paramsId)


    return(
        <div className="scoring">
            <h1>Select The Course You Wanna Play!</h1>
        {/* all created courses will be below */}
        {courseArray.map(c => {
            return (
                <div className="scoring-display">
                    <p className="coursename-scoring">{c.courseName}</p>
                    <img className="courseimg-scoring" src={c.courseImg}></img>
                    <Link to={`/scoringtable/${c._id}`}><button className="play-btn">Play Course</button></Link>
                </div>
            );
        })}

            <h2>Can't Find Your Course?</h2>
            <div>
                <Link to="/createcourse"><button className="add-your-course">Add Your Course</button></Link>
            </div>
        </div>
    )
}

export default Scoring;