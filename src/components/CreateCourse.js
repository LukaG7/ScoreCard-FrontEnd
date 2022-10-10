import { useState } from 'react';
import axios from 'axios';

function CreateCourse(){

    const [ state, setState ] = useState({ courseName: '', courseImg: '' })

    const [ holesState, setHolesState ] = useState([])

    function updateState(event){
        setState({...state, [event.target.name]: event.target.value}) 
    }

    const updateHolesState = index => event => {
        const copyHolesState = [...holesState];
        copyHolesState[index] = {
            ...copyHolesState[index],
            [event.target.name]: event.target.value
        };
        setHolesState(copyHolesState);
    }

    const deleteHole = index => event => {
        event.preventDefault();
        const copyHolesState = [...holesState];
        copyHolesState.splice(index, 1);
        setHolesState(copyHolesState)

    }

    function handleSubmit(event){
        event.preventDefault()
        axios.post('http://localhost:3001/signup', state)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }


    function addHole(event){
        event.preventDefault()
        setHolesState([...holesState, { par: '', yardage: '' }])
    }

    return(
        <div>
        <form>
            <label>Course Name</label>
            <input value={state.courseName} name='courseName' onChange={updateState}/>   
            <label>Course Image</label>
            <input value={state.courseImg} name='courseImg' onChange={updateState}/>
            <div>
                <h2>Course Holes</h2>
                <button onClick={addHole}>Add Hole</button>
                <div>
                    {holesState.map((singleHole, index) => {
                        return(
                            <div>
                                <span>Hole Number: {index + 1}</span>
                                <label>Par</label>
                                <input value={singleHole.par} name='par' onChange={updateHolesState(index)} />
                                <label>Yardage</label>
                                <input value={singleHole.yardage} name='yardage' onChange={updateHolesState(index)} />
                                <button onClick={deleteHole(index)}>Delete hole</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </form>

        </div>
        
    )
}

export default CreateCourse;