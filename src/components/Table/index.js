import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from "react-bootstrap";
import employees from "../../random-people.json"


function Table() {

const renderTableBody = (employee, index) => {

    return(

        <tr key={index}>
        <td><img src={employee.picture.medium}></img></td>
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
                {employees.map(renderTableBody)}
            </tbody>
        </ReactBootstrap.Table>
    );
}

export default Table;