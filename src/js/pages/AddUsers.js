import React from "react";
import {connect} from "react-redux";

//get actions to use
import {setUserName} from "../actions/userActions";

class AddUsers extends React.Component{
  setName() {
    console.log("this.props AddUsers", this.props);
    this.props.setName("new name");
  }

  render(){
    return(
      <div>
        <h3>Add Users</h3><br/>
        New name: <input type="text" ></input>
        <button onClick={this.setName.bind(this)}>Submit</button><br/>
        name:
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
     setName(newName) {
  //     debugger;
       // console.log("map");
       dispatch(setUserName(newName));
     }
   };
 };

 export default connect(mapStateToProps, mapDispatchToProps)(AddUsers);
