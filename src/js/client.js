import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, browserHistory} from "react-router";

import Layout from "./components/Layout";
import store from "./store";

import SeeUsers from "./pages/SeeUsers";
import AddUsers from "./pages/AddUsers";
import SearchUsers from "./pages/SearchUsers";

const app = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
  {/* browserHistory remembers address URLs and parses them into location object */}
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={SeeUsers}></IndexRoute>
        <Route path="add-users" component={AddUsers}></Route>
        <Route path="search-users" component={SearchUsers}></Route>
      </Route>
    </Router>
  </Provider>, app);
