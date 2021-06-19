import React, { Component } from "react";
import { Route } from "react-router-dom";
import PostList from "../components/PostList";
import DetailsPost from "../components/DetailsPost";
import AddPost from "../components/AddPost";
class Routes extends Component {
  render() {
    return (
      <div className="routes-container">
        <Route exact path="/" component={PostList} />
        <Route exact path="/addPost" component={AddPost} />
        <Route
          exact
          path="/detailsPost/:_id"
          render={(props) => <DetailsPost _id={props.match.params._id} />}
        />
      </div>
    );
  }
}

export default Routes;
