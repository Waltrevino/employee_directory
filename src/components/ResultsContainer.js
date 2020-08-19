import React, { Component } from "react";
import Wrapper from "./Wrapper";
import SearchBar from "./SearchBar";
import Header from "./Header";
import Table from "./Table";
import API from "../utils/API";
import 'bootstrap/dist/css/bootstrap.min.css';

class ResultsContainer extends Component {
  state = {
    search: "",
    results: [],
    filteredEmployees: []
  };

  componentDidMount(){
 
    this.searchEmployees();
  }

  searchEmployees = () => {
    API.search()
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  };

  handleInputChange = ev => {
    // const name = ev.target.name;
    const value = ev.target.value;

  

    this.setState({
      search: value
    });

            // if ( search !== "" && employee.name.indexOf( search ) === -1 ) {
        //     return null
        // }

  };

 handleSearchRequest = ev => {
  //  ev.preventDefault();
  //  this.searchEmployees(this.state.search);
  this.searchEmployees();
 } 

handleFilterRequest = ev => {
  this.state.results.filter((employee) => {
    return employee.name.toLowerCase().includes(this.state.search.toLowerCase())
  })
}

    render() {

        return (
     
        <Wrapper>
          <Header />
          <SearchBar 
            search={this.state.search}
           
            handleSearchRequest={this.handleSearchRequest}
            handleInputChange={this.handleInputChange}
           
          />
            <Table 
               search={this.state.search} 
               results={this.state.results}
               handleFilterRequest={this.handleInputChange}
            />
        </Wrapper>

        );
      }

}

export default ResultsContainer;