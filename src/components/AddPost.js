import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Input from '@material-ui/core/Input';

class AddPost extends Component {
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addPost = () => {
    console.log(this.state);
    axios
      .post("/add-post", { ...this.state })
      .then(() => this.props.addPostReducer({ ...this.state }))
      .catch((err) => alert(err));
  };
  render() {
    return (
      <div className="add-post-container">
        <div>
          <h1>Add A Post</h1>
          <h3>Title </h3>
          <Input type="text" name="title" onChange={this.handleChange} />
          <h3>Points </h3>
          <Input type="number" name="points" onChange={this.handleChange} />
          <h3>User </h3>
          <Input type="text" name="user" onChange={this.handleChange} />
          <h3>Time </h3>
          <Input type="number" name="time" onChange={this.handleChange} />
          <h3>Time Ago </h3>
          <Input type="text" name="time_ago" onChange={this.handleChange} />
          <h3>Comments Count </h3>
          <Input
            type="number"
            name="comments_count"
            onChange={this.handleChange}
          />
          <h3>Type </h3>
          <Input type="text" name="type" onChange={this.handleChange} />
          <h3>Url </h3>
          <Input type="text" name="url" onChange={this.handleChange} />
          <h3>Domain </h3>
          <Input type="text" name="domain" onChange={this.handleChange} />
        </div>

        <br />
        <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
          <Button
            onClick={this.addPost}
            variant="contained"
            color="primary"
            disableElevation
          >
            Add a Post
          </Button>
        </Link>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPostReducer: (newpost) => {
      dispatch({
        type: "ADD_POST",
        newpost,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(AddPost);
