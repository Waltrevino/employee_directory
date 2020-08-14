import React from "react";
import Wrapper from "./components/Wrapper";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import Table from "./components/Table";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
  <div>
  <Wrapper>
    <Header />
    <SearchBar />
      <Table />
  </Wrapper>
  </div>
  );
}

export default App;
