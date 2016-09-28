import React from "react";
import {connect} from "react-redux";

import {fetchUser} from "../actions/userActions";

class SeeUsers extends React.Component{

  // componentWillMount(){
  //   console.log("cWM props", this.props);
  //   this.props.dispatch(fetchUser())
  // }

  render(){
    console.log("this props",this.props);
    return(
      <div>
        <h3>See Users</h3>
        <button onClick={this.props.fetchShit}>Fetch users</button>
        <br/>
        User: {this.props.user.name}
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
