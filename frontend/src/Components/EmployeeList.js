import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import '../index.css'
const EmployeeList = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [employees, setEmployees] = useState();
    
    useEffect(()=> {
        fetch('http://localhost:8085/api/employees')
        .then((response) => response.json())
        .then((json) => {setEmployees(json); setIsLoaded(true);})
        
       
    },[])
    

    

    if(!isLoaded){
        return <div>Loading...</div>
    }else{
return(
        <div>
            <h1>Employee List</h1>
            <table >
                <thead>
            <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
                {employees.map((employee)=> (
            <tr>                
                <td>{employee.firstname}</td>                     
                <td>{employee.lastname}</td>
                <td>{employee.email}</td>            
                <Link to={"/Update/" + employee._id}>Update Employee</Link>            
                <Link  to={"/Delete/" + employee._id}>Delete Employee</Link>      
                <Link  to={"/View/" + employee._id}>View Employee</Link>                
               
                
            </tr>
             
                ))}
            
            </tbody>
            </table>
           
        </div>
    );
}
}

export default EmployeeList;