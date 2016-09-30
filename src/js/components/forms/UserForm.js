import React from "react";
import { connect } from 'react-redux';

export default class UserForm extends React.Component{

  handleSubmit(event){
    event.preventDefault();
    this.props.something(this.refs);
  }

  render(){
    console.log("userRender", this.props);
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        Name: <input type="text" ref="name"></input><br/>
        Age: <input type="text" ref="age"></input><br/>
                <button type="submit">Submit</button>
      </form>
    )
  }
}
