import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import './w3.css'
var apiurl = require('../../env/env')

export default function StudentPage(){
    const {studentID} = useParams()
    const [dataStudent,setDataStudent]  = React.useState(); 
    

    React.useEffect(()=>{
        async function studentCall() {
            var response = await axios.get(apiurl.acesspointapi+"/students/3")
            let data = await response.data
            setDataStudent(data)
        }
        studentCall();

    },[])
 
    if(dataStudent){
        return (
            <div>
                <h1>StudentPage {studentID}</h1>
                <p>{dataStudent.student.name}</p>
                <p>{dataStudent.student.age}</p>
                <p>{dataStudent.student.grade}</p>
            </div>
        )    
    }else{
        return <div></div>
    }
}
