import React, {useState, useEffect} from 'react';
import '../index.css'
import { useParams } from 'react-router';
import {useNavigate} from 'react-router-dom';


const DeleteEmployee = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [employee, setEmployee] = useState([]);
    const navigate = useNavigate();
    const {id} = useParams();
    
    useEffect(() => {
        fetch(`http://localhost:8085/api/${id}`)
        .then((response) => response.json())
        .then((json) => {setEmployee(json); setIsLoaded(true);})
    },[id])
    

    const tableStyle = {
       
    }
    const onSubmitDelete = (e) => {
        
        fetch(`http://localhost:8085/api/${id}`, {
            method: 'DELETE',
            
            
        }).then(res => res.json())
        .then(res => console.log(res))
        .then(() => {setEmployee(null); setIsLoaded(false);})
        navigate('/List');
    }

    if(!isLoaded){
        return <div>Loading...</div>
    }else {
return(
        <div id='deleteEmployee'>
            <h1>Confirm Deletion?</h1>
            <table style={tableStyle}>
                <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                
                <tr key={employee.id}>                
                    <td>{employee.firstname}</td>                     
                    <td>{employee.lastname}</td>
                    <td>{employee.email}</td>
                </tr>
            </tbody>
            </table>
            <button onClick={onSubmitDelete}>Delete</button>
        </div>
    );
}
}
export default DeleteEmployee;