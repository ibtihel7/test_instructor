import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
// import axios from 'axios'
class AddPost extends Component {

    handleChange=(e)=>
    {
       this.setState({
           [e.target.name]:e.target.value
       })
    }

    addPost=()=>
    {
      this.props.addPostReducer({...this.state})
       
    }

       // addPost=()=>
    // {
    //   axios.post('/add-post',{...this.state})
    //    .then(()=>this.props.addPostReducer({...this.state}))
    //    .catch((err)=>alert(err)) 
    // }
    render() { 
        return ( 
            <div className='add-post-container'>
             <h1>Add Post</h1>
             ID :
             <input  type='number' name='_id' onChange={this.handleChange}/>
             title :
             <input  type='text' name='title' onChange={this.handleChange}/>
             user :
             <input  type='text' name='user' onChange={this.handleChange}/>
            
             <Link to='/'>
             <button onClick={this.addPost}>Add Post </button>
             </Link>

            </div>
         );
    }
}
const mapDispatchToProps=(dispatch)=>
{
    return {
        addPostReducer:newpost=>
        {
            dispatch({
                type:'ADD_POST',
                newpost
            })
        }
    }
}
 
export default connect(null,mapDispatchToProps)(AddPost);