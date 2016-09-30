//import axios from "axios";

export function fetchTweets() {
  return function(dispatch) {
    // fetch("http://rest.learncode.academy/api/test123/tweets")
    fetch("https://testdata-11cab.firebaseio.com/tweets.json")
      .then(response => response.json())
      .then((response) => {
        // console.log(response.data);
        console.log(response);
        dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response})
      })
      .catch((err) => {
        console.log(err);
        dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
      })
  }
}

export function addTweet(tweet) {
    console.log(tweet);
  return function(dispatch) {
    fetch('https://testdata-11cab.firebaseio.com/tweets.json', {
        method: "POST",
        body: JSON.stringify(tweet)
      })
      .then(res=>{console.log(res)})
      .then(res=>{console.log(res)})
      // .then(res => {
      //   dispatch()
      // })
  }
//    type: 'ADD_TWEET',
  //  payload:  tweet,
}

export function updateTweet(id, text) {
  return {
    type: 'UPDATE_TWEET',
    payload: {
      id,
      text,
    },
  }
}

export function deleteTweet(id) {
  return { type: 'DELETE_TWEET', payload: id}
}
