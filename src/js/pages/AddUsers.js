import React from "react";
import {connect} from "react-redux";

//get actions to use
// import {setUserName} from "../actions/userActions";
import {setUserProp} from "../actions/userActions";
import UserForm from "../components/forms/UserForm";

class AddUsers extends React.Component{

  handleInput(userValues){
    console.log("this", this.props);
    const userProps = {
      name: userValues.name.value,
      age: userValues.age.value
    }
    console.log(userProps);
    this.props.setUser(userProps);
  }

  render(){
    return(
      <div>
        <UserForm onSubmit={ this.handleInput.bind(this) }/>
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
     setUser(userProps) {
       dispatch(setUserProp(userProps));
     }
   };
 };

 export default connect(mapStateToProps, mapDispatchToProps)(AddUsers);

 // <h3>Add Users</h3><br/>
 // New name: <input type="text" ></input>
 // <button onClick={this.setName.bind(this)}>Submit</button><br/>
 // name:

 // setName() {
 //   console.log("this.props AddUsers", this.props);
 //   this.props.setName("new name");
 // }
