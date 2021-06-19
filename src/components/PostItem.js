import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import DetailsIcon from "@material-ui/icons/Details";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

class PostItem extends Component {
  deletePost = () => {
    const { item } = this.props;
    axios
      .delete(`/delete-post/${item._id}`)
      .then(() => this.props.deletePostReducer(item._id))
      .catch((err) => alert(err));
  };
  render() {
    const { item } = this.props;
    return (
      <section>
        <Divider variant="inset" />
        <Grid container direction="row" justify="center">
          <Grid item xs={8}>
            <h3>Title : {item.title}</h3>
          </Grid>
          <Grid style={{ marginTop: "15px" }} item xs={1}>
            <Link
              to={`/detailsPost/${item._id}`}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <Button
                size="small"
                variant="contained"
                color="default"
                startIcon={<DetailsIcon />}
              >
                Details
              </Button>
            </Link>
          </Grid>
          <Grid style={{ marginTop: "15px" }} item xs={1}>
            <Button
              size="small"
              variant="contained"
              color="default"
              startIcon={<DeleteIcon />}
              onClick={this.deletePost}
            >
              Delete
            </Button>
          </Grid>
          <Divider light />
        </Grid>
      </section>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deletePostReducer: (_id) => {
      dispatch({
        type: "REMOVE_POST",
        _id,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(PostItem);
