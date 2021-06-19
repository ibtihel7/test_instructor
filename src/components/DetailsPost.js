import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import Button from "@material-ui/core/Button";

class DetailsPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      title: "",
      points: 0,
      user: "",
      time: 0,
      time_ago: "",
      comments_count: 0,
      type: "",
      url: "",
      domain: "",
    };
  }

  componentDidMount = () => {
  
    this.setState({
      ...this.props.posts.filter(
        (el) => (el._id) === (this.props._id)
      )[0],
    });
    axios.get(`/get-postDetails/${(this.state._id)}`).then((res)=>this.props.updatePostReducer(res.data))

  };

  render() {
    console.log(this.props.posts);
    console.log(this.state);

    return (
      <div className="add-post-container">
        <h1> Post Details</h1>
        <h4>Id : {this.state._id}</h4>
        <h4>Title : {this.state.title}</h4>
        <h4>Points : {this.state.points}</h4>
        <h4>User : {this.state.user}</h4>
        <h4>Time : {this.state.time}</h4>
        <h4>Time Ago : {this.state.time_ago}</h4>
        <h4>Comments Count : {this.state.comments_count}</h4>
        <h4>Type : {this.state.type}</h4>
        <h4>Url : {this.state.url}</h4>
        <h4>Domain : {this.state.domain}</h4>

        <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
          <Button variant="contained" color="primary">
            Back to home page
          </Button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.postReducer,
  };
};

export default connect(mapStateToProps, null)(DetailsPost);
