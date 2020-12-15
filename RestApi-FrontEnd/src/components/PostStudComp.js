import React from 'react';
import StudentService from '../services/StudentService';


/*
const api = axios.create({
    baseURL: `http://localhost:8665/students`
})
*/

class PostStudComp extends React.Component{

    constructor(props){
        super(props);
        this.state = { 
            firstName:'', 
            lastName:'', 
            email:''
        }
        this.changeFname=this.changeFname.bind(this);
        this.changeLname=this.changeLname.bind(this);
        this.changeemail=this.changeemail.bind(this);
        this.onCreateStudent=this.onCreateStudent.bind(this);
    }



    changeLname=(event) =>{
        this.setState({lastName:event.target.value});
    }

    changeemail=(event) =>{
        this.setState({email:event.target.value});
    }
    changeFname= (event) =>{
        this.setState({firstName: event.target.value});
    }
    
    onCreateStudent=(e)=>{
    
        e.preventDefault();
        let Stud = {
            
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email
        };

        StudentService.postStudent(Stud).then(res =>{
            this.props.history.push('/students');
        });
        


}



    
        render(){
        
            return(
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="card">
                                <h3 className="center-text'"> Add Student</h3>
                                <div className="card_body">
                                    <form>
                                        <div className="form-group">
                                            <label>First Name:</label>
                                            <input placeholder="First Name" name="firstname" className="form-input"
                                            valu={this.state.firstName} onChange={this.changeFname}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Last Name:</label>
                                            <input placeholder="Last Name" name="lastName" className="form-input"
                                            valu={this.state.lastName} onChange={this.changeLname}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Email:</label>
                                            <input placeholder="Email" name="email" className="form-input"
                                            valu={this.state.email} onChange={this.changeemail}
                                            />
                                        </div>

                                        <button className="form-button" onClick={this.onCreateStudent}> Submit</button>
                                    </form>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            );
        }
    
    }

    export default PostStudComp;
    

