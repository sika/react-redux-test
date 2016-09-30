import React from "react";

export default class TweetsForm extends React.Component{
  handleFormSubmit(event){
    event.preventDefault(); //prevent page refresh
    console.log("tweetsForm this props", this.props);
    //handleSubmit passed as prop from AddTweets
    this.props.handleSubmit(this.refs); //handleSubmit bound to submittedForm in AddTweets
  }

  render(){
    return(
      <form onSubmit={this.handleFormSubmit.bind(this)}>
        <label>Text: </label><input type="text" ref="text"></input>
        <button type="submit">Submit text</button>
      </form>
    )
  }
}
