import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from "react-bootstrap";
// import employees from "../../random-people.json"


function Table(props) {

    const renderTableBody = (employee, index) => {
        // const { search } = props;

        // console.log(search);

        // if ( search !== "" && employee.name.indexOf( search ) === -1 ) {
        //     return null
        // }

        return(
            <tr key={index}>
            <td><img src={employee.picture.medium} alt="employee_img"></img></td>
            <td>{employee.name.first + " " + employee.name.last}</td>
            <td>{employee.location.city}</td>
            <td>{employee.location.country}</td>
            <td>{employee.phone}</td>

        </tr>
        )
    }

    return (
        <ReactBootstrap.Table striped bordered hover>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Country</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {props.results.map(renderTableBody)}
            </tbody>
        </ReactBootstrap.Table>
    );
}

export default Table;