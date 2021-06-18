import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
// import axios from 'axios'
class DetailsPost extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            _id:'',
            title:'',
            user:''
        }
    }


    componentDidMount=()=>

    {
        this.setState({
            ...this.props.posts.filter(el=> parseInt(el._id)=== parseInt (this.props._id))[0]
        })
    }
   

    render() { 
        console.log(this.props.posts)
        console.log(this.state)

        return ( 
            <div className='add-post-container'>
            <h1>Details post</h1>
             id :
             <p>{this.state._id} </p>
             title :
             <p>{this.state.title} </p>
             user :
             <p>{this.state.user} </p>
             <Link to='/'>
             <button>back to home page </button>
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