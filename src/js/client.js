import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import Layout from "./components/Layout";
import store from "./store";

import SeeUsers from "./pages/SeeUsers";
import SeeTweets from "./pages/SeeTweets";
import AddTweets from "./pages/AddTweets";
import AddUsers from "./pages/AddUsers";
import SearchUsers from "./pages/SearchUsers";

const app = document.getElementById('app');

console.log("store", store.getState());

ReactDOM.render(
  <Provider store={store}>
  {/* hashHistory remembers address URLs and parses them into location object.
    Can be used without server config. browserHistory is otherwise recommended for cleaner URLs.
    */}
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={SeeUsers}></IndexRoute>
        <Route path="add-users" component={AddUsers}></Route>
        <Route path="see-tweets" component={SeeTweets}></Route>
        <Route path="add-tweets" component={AddTweets}></Route>
        <Route path="search-users" component={SearchUsers}></Route>
      </Route>
    </Router>
  </Provider>, app);
