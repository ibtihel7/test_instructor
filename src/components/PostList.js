import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import PostItem from "./PostItem";
import Button from "@material-ui/core/Button";

class PostList extends Component {
  componentDidMount = () => {
    axios
      .get("/get-posts")
      .then((res) => this.props.updatePostReducer(res.data));
  };

  render() {
    const { posts } = this.props;
    return (
      <section>
        <h1> Posts List</h1>

        <div className="post-list-container">
          {posts.map((el, index) => (
            <PostItem key={index} item={el} />
          ))}
        </div>
        <br />
        <Link
          to="/addPost"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <Button variant="contained" color="primary">
            Add a Post
          </Button>
        </Link>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.postReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updatePostReducer: (posts) => {
      dispatch({
        type: "UPDATE_POSTS",
        posts,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
