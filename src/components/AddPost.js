import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
class AddPost extends Component {

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // addPost=()=>
    // {
    //   this.props.addPostReducer({...this.state})

    // }

    addPost = () => {
        console.log(this.state);
        axios.post('/add-post', { ...this.state })
            .then(() => this.props.addPostReducer({ ...this.state }))
            .catch((err) => alert(err))
    }
    render() {
        return (
            <div className='add-post-container'>
                <div>
                    <h1>Add Post</h1>
                    <h3>Title </h3>
                    <input type='text' name='title' onChange={this.handleChange} />
                    <h3>Points </h3>   <input type='number' name='points' onChange={this.handleChange} />
                    <h3>User </h3>   <input type='text' name='user' onChange={this.handleChange} />
                    <h3>Time </h3>  <input type='number' name='time' onChange={this.handleChange} />
                    <h3>Time Ago </h3> <input type='text' name='time_ago' onChange={this.handleChange} />
                    <h3>Comments Count </h3> <input type='number' name='comments_count' onChange={this.handleChange} />
                    <h3>Type </h3>   <input type='text' name='type' onChange={this.handleChange} />
                    <h3>Url </h3>  <input type='text' name='url' onChange={this.handleChange} />
                    <h3>Domain </h3> <input type='text' name='domain' onChange={this.handleChange} />


                </div>

                <br />
                <Link to='/'>
                    <button onClick={this.addPost}>Add Post </button>
                </Link>

            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPostReducer: newpost => {
            dispatch({
                type: 'ADD_POST',
                newpost
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(AddPost);