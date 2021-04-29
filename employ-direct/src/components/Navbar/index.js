import React from "react";
import "../Navbar/style.css"

function Navbar({children}) {
  return (
    <nav className="navbar navbar-light bg-light">
        {children}
      </nav>
  );
}

export default Navbar;