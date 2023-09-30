import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      <nav id="navbar">
        <div id="navLeft">
          <Link to="/">
            <h1>DropNote</h1>
          </Link>
        </div>
        <div id="navRight">
            <Link to="/list">
            <button className="btn">{`Pending (${props.tasks.length})`}</button>
          </Link>
          <Link to="/completed">
            <button className="btn">{`Completed (${props.completed.length})`}</button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
