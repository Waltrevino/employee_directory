import React from "react";

function SearchBar(props) {
    return (
<nav className="navbar navbar-light bg-light d-flex justify-content-center border">
  <form className="form-inline">
    <div className="input-group">
      <div className="input-group-prepend">
        <span onClick={props.handleSearchRequest}className="input-group-text" id="basic-addon1" >Search</span>
      </div>
      <input 
        name="name"
        onChange={props.handleInputChange}
        value={props.search}
        type="text" className="form-control" placeholder="Employee Name" aria-label="Username" aria-describedby="basic-addon1" />
    </div>
  </form>
</nav>
    );
}

export default SearchBar;