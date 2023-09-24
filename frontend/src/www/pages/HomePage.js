import React from 'react';
import axios from "axios";
import './w3.css'
import { Link } from 'react-router-dom';
import SpecialButton from '../components/SpecialButton';

var apiurl = require('../../env/env');

export default function HomePage() {
    const [allStudents,setAllStudents] = React.useState([]);

    React.useEffect(()=>{
        async function allStudentsCall(){
            const response = await axios.get(apiurl.acesspointapi + "/students");
            let data = await response.data;
            setAllStudents(data)
        }
        allStudentsCall();
    },[])

    if (allStudents.students && allStudents.students.length > 0) {
        return (
        <div>
            <table class="w3-table-all">
                <tr class="w3-blue">
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Grade</th>
                </tr>
                {allStudents.students.map(dataobj => 
                <tr>
                    <td><Link to={`/students/${dataobj.id}`}>{dataobj.id}</Link></td>
                    <td>{dataobj.name}</td>
                    <td>{dataobj.age}</td>
                    <td>{dataobj.grade}</td>
                </tr>)}
            </table>
            <center>
                <SpecialButton />
            </center>
        </div>
        );
    } else {
        return <div></div>;
    }
}
