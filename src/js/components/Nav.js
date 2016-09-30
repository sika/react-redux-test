import React from "react";
import {Link} from "react-router";

export default class Nav extends React.Component{

  render(){
    return(
      <div className="container-nav">
          <ul className="container-nav-ul">
            <li><h3><Link to="/">See Users</Link></h3></li>
            <li><h3><Link to="see-tweets">See tweets</Link></h3></li>
            <li><h3><Link to="add-users">Add users</Link></h3></li>
            <li><h3><Link to="add-tweets">Add tweets</Link></h3></li>
            <li><h3><Link to="search-users">Search users</Link></h3></li>
          </ul>
      </div>
    )
  }
}
