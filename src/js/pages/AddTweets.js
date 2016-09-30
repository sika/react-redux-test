import React from "react";
import {connect} from "react-redux"


import TweetsForm from "../components/forms/TweetsForm";
import {addTweet} from "../actions/tweetsActions";

class AddTweets extends React.Component{
  submittedForm(data){
    console.log("submittedForm data",data);
    console.log("submittedForm this",this);
    const tweet = {
      id: Date.now(),
      text: data.text.value
    }
    console.log(tweet);
    this.props.setTweet(tweet);
  }
  render(){
    return(
      <div>Add Tweets<br/>
      {/* need to bind this to keep function setTweet which is bound to this.props */}
        <TweetsForm handleSubmit={this.submittedForm.bind(this)}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    //user: state.user.user
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setTweet(tweet) {
      dispatch(addTweet(tweet));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTweets);
