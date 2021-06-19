import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
class DetailsPost extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            _id:'',
            title:'',
            points:0,
            user:'',
            time:0,
            time_ago:'',
            comments_count:0,
            type:'',
            url:'',
            domain:''

        }
    }


    componentDidMount=()=>

    {
        this.setState({
            ...this.props.posts.filter(el=> parseInt (el._id) === parseInt(this.props._id))[0]
        })
        axios.get(`/get-postDetails/${this.state._id}`).then((res)=>this.props.updatePostReducer(res.data))

    }



   

    render() { 
        console.log(this.props.posts)
        console.log(this.state)

        return ( 
            <div className='add-post-container'>
            <h1> Post Details</h1>
            
                <h3>Id : {this.state._id}</h3>
                <h3>Title : {this.state.title}</h3>
                <h3>Points : {this.state.points}</h3>
                <h3>User : {this.state.user}</h3>
                <h3>Time : {this.state.time}</h3>
                <h3>Time Ago : {this.state.time_ago}</h3>
                <h3>Comments Count : {this.state.comments_count}</h3>
                <h3>Type : {this.state.type}</h3>
                <h3>Url : {this.state.url}</h3>
                <h3>Domain : {this.state.domain}</h3>
            
             <Link to='/'>
             <button>Back to home page </button>
             </Link>

            </div> 
         );
    }
}

const mapStateToProps=(state)=>
{
    return {
        posts:state.postReducer
    }
} 



 
export default connect(mapStateToProps,null)(DetailsPost);