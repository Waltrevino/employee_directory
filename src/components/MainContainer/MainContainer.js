import React, { Component } from "react";
import Wrapper from "./Wrapper";
import SearchBar from "./Navbar";
import Header from "./Header";
import Table from "./Table";
import 'bootstrap/dist/css/bootstrap.min.css';

class MainContainer extends Component {



    render() {
        return (
        
        <Wrapper>
          <Header />
          <SearchBar />
            <Table />
        </Wrapper>

        );
      }




}

export default MainContainer;