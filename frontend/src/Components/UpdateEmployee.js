
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import '../index.css'
const UpdateEmployee = () => {
    const [employeeState, setEmployeeState] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:8085/api/${id}`)
        .then((response) => response.json())
        .then((json) => {setEmployeeState(json); setIsLoaded(true);})
    },[id])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setEmployeeState(employeeState)
        
        fetch(`http://localhost:8085/api/${id}`, {
            method: 'PUT',
            body: JSON.stringify(employeeState)
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .then((json) => {setEmployeeState(json); setIsLoaded(true);})
        
        
    
}
    
    

    if(!isLoaded){
        return <div>Loading...</div>
    }else{
return(
        <div>
            <h1>Update User Information</h1>
            <form onSubmit={handleSubmit}>
            <p>Current Firstname: {employeeState.firstname}</p>
            <input placeholder="New value" 
            name="employee[firstname]"
            onChange={e => setEmployeeState({...employeeState, firstname: e.target.value})}></input>
            <p>Current Lastname: {employeeState.lastname}</p>
            <input placeholder="New value"
             name="employee[lastname]"
             onChange={e => setEmployeeState({...employeeState, lastname: e.target.value})}></input>
            <p>Current Email: {employeeState.email}</p>
            <input placeholder="New value"
             name="employee[email]"
             onChange={e => setEmployeeState({...employeeState, email: e.target.value})}></input>
             <button   type="submit">Update Employee</button>
            </form>
        </div>
    );
}
}
export default UpdateEmployee;