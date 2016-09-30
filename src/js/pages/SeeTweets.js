import React from "react";
import {connect} from "react-redux";

import {fetchTweets} from "../actions/tweetsActions";

class SeeTweets extends React.Component{
  componentWillMount(){
    this.props.fetchTweetsFromServer();
  }

  render(){
    console.log("tweets this.props",this.props);
    const {tweets} = this.props;
    const mappedTweets = tweets.map((tweet, i)=>{
      return (<li key={i}>{i+1} {tweet.text}</li>)
    })
    return(
      <div>
        <h3>See Tweets</h3>
        <button onClick={this.props.fetchTweetsFromServer}>Fetch tweets</button><br/>
        {/* tweets list */}
        <ul>
          {mappedTweets}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tweets: state.tweets.tweets //map store tweets object to this.props
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTweetsFromServer() {
       dispatch(fetchTweets());
     }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeeTweets);
