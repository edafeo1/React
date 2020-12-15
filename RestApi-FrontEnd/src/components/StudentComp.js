
import React from 'react';
import StudentService from '../services/StudentService';

/*
const api = axios.create({
    baseURL: `http://localhost:8661/students`
})
*/

class StudentComp extends React.Component {



    constructor(props){
        super(props);
        this.state = {

            Students:[]
    
            }  
    }

    /*
    getStudents = async () => {
        api.get('/students').then(res => {
            this.setState({Students: res.data})
        })
    }
    */


    componentDidMount(){
        StudentService.getStudents().then((res) => {
            this.setState({Students: res.data});
        });
    }
/*
    componentDidMount(){
        StudentService.getStudents().then((response)=>{
            this.setState({Students: response.data})
        });
    }
 */

    render(){
        return(
            <div>
                <h1 className="text-center">Student List</h1>
                <div className="row">
                <table className = "table">
                    <thead>
                        <tr>
                            <th className="table__head">Student Id</th>
                            <th className="table__head">Student firstName</th>
                            <th className="table__head">Student lastName</th>
                            <th className="table__head">Students Email</th>
                        </tr>
                    </thead>

                    <tbody className="table__body">
                        {
                            this.state.Students.map(
                                Students =>
                                <tr> 
                                    
                                    <td>{Students.id}</td>
                                    <td>{Students.firstName}</td>
                                    <td>{Students.lastName}</td>
                                    <td>{Students.email}</td>
                                    
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                </div>

            </div>
        )
    }
}

export default StudentComp;