import React from "react";
import { connect } from 'react-redux';

//import { Form} from 'react-redux-form';

export default class UserForm extends React.Component{

  handleSubmit(event){
    event.preventDefault();

    this.props.onSubmit(this.refs);
    // console.log("handleSubmit this", this.refs.name.value);
    //console.log("handleSubmit this", this);
  }

  render(){
    console.log("userRender", this.props);
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        Name: <input type="text" ref="name"></input><br/>
        Age: <input type="text" ref="age"></input><br/>
                <button type="submit">Submit</button>
      </form>
      //model required
      // <Form model="userForm"
      //   onSubmit={(userForm) => this.handleSubmit(userForm)}>
      //   <label>Name:</label>
      //   <Control.text model="userForm.name" />
      //   <button type="submit">
      //     Submit
      //   </button>
      // </Form>
    )
  }
}
