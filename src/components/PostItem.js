import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'
class PostItem extends Component {

    deletePost=()=>
    {  const {item} = this.props
    axios.delete(`/delete-post/${item._id}`)   
  .then(()=>this.props.deletePostReducer(item._id)) 
  .catch((err)=>alert(err)) 
    }
    render() { 
        const {item}=this.props
        return ( 
            <div className='post-item-container'>
            <h2>Id : {item._id}</h2>
            <h3>title : {item.title}</h3>
            <h3>user : {item.user}</h3>
            <Link to={`/detailsPost/${item._id}`}>
            <button>Details</button>
            </Link>
            <button onClick={this.deletePost}>Delete</button>
            </div>
         );
    }
}
const mapDispatchToProps=(dispatch)=>
{
    return {
        deletePostReducer:_id=>
        {
            dispatch({
                type:'REMOVE_POST',
                _id
            })
        }
    }
}
 
export default connect(null,mapDispatchToProps)(PostItem);