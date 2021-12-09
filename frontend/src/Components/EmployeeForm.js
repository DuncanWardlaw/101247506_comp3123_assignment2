import React, { Component } from 'react'



export default class EmployeeForm extends Component {
    constructor(props){
        super(props);
       
        this.onChangeFirstname = this.onChangeFirstname.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            employee: {
              firstname: '',
              lastname: '',
              email: ''},
            
            employees: []
        }
    }
    
    componentDidMount() {
      this.setState({ 
        employees: ['test user'],
        firstname: 'test user'
      });
    }
    onChangeFirstname(e) {
      this.setState({
        firstname: e.target.value
      });
    }
    onChangeLastname(e) {
      this.setState({
        lastname: e.target.value
      });
    }
    onChangeEmail(e) {
      this.setState({
        email: e.target.value
      });
    }
    onSubmit(e){
      e.preventDefault();
      const employee = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,

      };
      fetch('http://localhost:8085/api/employees', {
        method: 'POST',
        headers: {          
           'Content-Type': 'application/json',
        },
        body: JSON.stringify(employee)
      }).then(response => response.json())
      .then(employee => {
          console.log('Success', employee)
      })
      .catch((error)=> {
        console.error('Error:', error)
      })
      this.props.history.push('/login');
    }
    render() {
        return (
          <div>
            <h1>New Employee</h1>
            <div id='newEmployee'>
              
                <form onSubmit={this.onSubmit} employee={this.state.employee}>
                <div class='inputBoxes'>
                  <input
                    type='text'
                    placeholder='firstname'
                    name='firstname'
                    
                    value={this.state.firstname}
                    onChange={this.onChangeFirstname.bind(this)}
                  />
                </div>
                <div class='inputBoxes'>
                  <input
                    type='text'
                    placeholder='lastname'
                    name='lastname'
                    
                    value={this.state.lastname}
                    onChange={this.onChangeLastname.bind(this)}
                  />
                </div>
                <div class='inputBoxes'>
                  <input
                    type='text'
                    placeholder='email'
                    name='email'
                    
                    value={this.state.email}
                    onChange={this.onChangeEmail.bind(this)}
                  />
                </div>
                <button
                    class='inputBoxes'
                    type="submit"
                    value="Add Employee"
                >Add Employee</button>
              </form>
            </div>
            </div>
        )
    }
}
