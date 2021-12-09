import React from 'react';
import EmployeeForm from './EmployeeForm'
import EmployeeList from './EmployeeList'
import DeleteEmployee from './DeleteEmployee'
import UpdateEmployee from './UpdateEmployee'
import ViewEmployee from './ViewEmployee'
import Home from './Home'
import {
  BrowserRouter as Router,
  
  Routes,
  Route,
  
} from "react-router-dom";


const Webpages = () => {
    
    return(
        <Router>
            <Routes>
            <Route  path="/" element={<Home/>} />
            <Route  path="/Add" element={<EmployeeForm/>} />
            <Route  path="/List" element={<EmployeeList/>} />
            <Route  path="/Update/:id"  element={<UpdateEmployee/>} />
            <Route  path="/Delete/:id" element={<DeleteEmployee/>} />
            <Route  path="/View/:id" element={<ViewEmployee/>} />
            

            </Routes>
        </Router>
    );
};
export default Webpages;