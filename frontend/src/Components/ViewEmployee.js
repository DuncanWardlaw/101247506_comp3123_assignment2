import React, {useState, useEffect} from 'react';
import '../index.css'
import { useParams } from 'react-router';
const DeleteEmployee = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [employee, setEmployee] = useState([]);
    const {id} = useParams();
    
    useEffect(() => {
        fetch(`http://localhost:8085/api/${id}`)
        .then((response) => response.json())
        .then((json) => {setEmployee(json); setIsLoaded(true);})
    },[id])
    

    const tableStyle = {
       
    }

    if(!isLoaded){
        return <div>Loading...</div>
    }else{
return(
        <div>
            <h1>View Employee</h1>
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
        </div>
    );
}
}
export default DeleteEmployee;