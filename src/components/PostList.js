import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
// import axios from 'axios'
import PostItem from './PostItem'

class PostList extends Component {
//   componentDidMount=()=>{
//             axios.get('/get-post').then((res)=>this.props.updatePostReducer(res.data))
//         }
        
    render() { 
        const {posts}= this.props
        
        // console.log(this.props.posts)
        return ( 
            <section>
            <div className='post-list-container'>
            
           {
               posts.map((el,index)=>
            <PostItem key={index} item={el}/>
        )
           }
            </div>
           
            <Link to='/addPost'>
            <button> Add Post</button>
            </Link>

            </section>
         );
    }
}
const mapStateToProps=(state)=>
{
    return {
        posts:state.postReducer
    }
}
const mapDispatchToProps=(dispatch)=>
{
    return {
        updatePostReducer:posts=>
        {
            dispatch({
                type:'UPDATE_POSTS',
                posts
            })
        }
    }
}

 
export default connect(mapStateToProps,mapDispatchToProps)(PostList);