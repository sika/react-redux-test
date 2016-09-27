import React from "react";
import {Link} from "react-router";

export default class Nav extends React.Component{

  render(){
    console.log("NAV", this.props);
    return(
      <div className="container-nav">
          <ul className="container-nav-ul">
            <li><h3><Link to="/">See Users</Link></h3></li>
            <li><h3><Link to="add-users">Add users</Link></h3></li>
            <li><h3><Link to="search-users">Search users</Link></h3></li>
          </ul>
      </div>
    )
  }
}
