import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar() {
    return (
<nav class="navbar navbar-light bg-light d-flex justify-content-center">
  <form class="form-inline">
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Search</span>
      </div>
      <input type="text" class="form-control" placeholder="Employee Name" aria-label="Username" aria-describedby="basic-addon1" />
    </div>
  </form>
</nav>
    );
}

export default Navbar;