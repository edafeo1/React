import axios from 'axios';

const API_URL = "http://localhost:7134/api/v1/students";

class StudentService {

    getStudents(){
        return axios.get(API_URL);
    }

    postStudent(student){
        return axios.post(API_URL, student);
    }
}

export default new StudentService()