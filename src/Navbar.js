// import React, { Component } from "react";

// class Navbar extends Component {
//   render() {
//     const { handleChange1, handleChange2 } = this.props;
//     // console.log(handleChange);
// return (
//     <div className="navbar">
//       <div className="name-box nav-child">Motasim Kazmi</div>
//       <div className="text-box nav-child">
//         <input type="url" placeholder="Text Box 1" onChange={handleChange1} />
//       </div>
//       <div className="text-box nav-child">
//         <input type="url" placeholder="Text Box 2" onChange={handleChange2} />
//       </div>

//       <div className="logout-box nav-child">LogOut</div>
//     </div>
//   );
//   }
// }

// export default Navbar;

import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

function Navbar(props) {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to Logout");
    }
  }
  return (
    <div className="navbar">
      <div className="name-box nav-child">{currentUser.email}</div>
      <div className="text-box nav-child">
        <input
          type="url"
          placeholder="Text Box 1"
          onChange={props.handleChange1}
        />
      </div>
      <div className="text-box nav-child">
        <input
          type="url"
          placeholder="Text Box 2"
          onChange={props.handleChange2}
        />
      </div>

      <div className="logout-box nav-child" onClick={handleLogout}>
        LogOut
      </div>
    </div>
  );
}

export default Navbar;
