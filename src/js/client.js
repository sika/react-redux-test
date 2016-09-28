import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import Layout from "./components/Layout";
import store from "./store";

import SeeUsers from "./pages/SeeUsers";
import AddUsers from "./pages/AddUsers";
import SearchUsers from "./pages/SearchUsers";

const app = document.getElementById('app');

console.log("store", store.getState());

ReactDOM.render(
  <Provider store={store}>
  {/* hashHistory remembers address URLs and parses them into location object */}
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={SeeUsers}></IndexRoute>
        <Route path="add-users" component={AddUsers}></Route>
        <Route path="search-users" component={SearchUsers}></Route>
      </Route>
    </Router>
  </Provider>, app);
