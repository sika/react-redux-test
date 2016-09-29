import React from "react";
import {connect} from "react-redux";

import {fetchUser} from "../actions/userActions";

class SeeUsers extends React.Component{

  //
//  const userTable = user.map()


  render(){
    console.log("this props",this.props.user);
    const {user} = this.props;
    const userTable = user.map((user, i)=>{
      return(
      <tr key={ i }>
        <td>
          {user.name}
        </td>
        <td>
          {user.age}
        </td>
      </tr>)
    })
    console.log("usertable", userTable);
    return(
      <div>
        <h3>See Users</h3>
        <button onClick={this.props.fetchShit}>Fetch users</button>
        <br/>
        <table>
          <tbody>
            {userTable}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchShit() {
      dispatch(fetchUser());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeeUsers);
