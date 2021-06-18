const express = require ( 'express');
const Post = require ('../models/postModel') ;
const postRouter = express.Router();
// postRouter.route('/')
//     .get((req, res) => {
//         Post.find({}, (err, posts) => {
//             res.json(posts)
//         })  
//     })
//     .post((req, res) => {
//         let post = new Post(req.body);
//         post.save();
//         res.status(201).send(post) 
//     })

// // Middleware 
// postRouter.use('/:postId', (req, res, next)=>{
//     Post.findById( req.params.postId, (err,post)=>{
//         if(err)
//             res.status(500).send(err)
//         else {
//             req.post = post;
//             next()
//         }
//     })

// })
// postRouter.route('/:postId')
//     .get((req, res) => {
//         res.json(req.post)
//     }) // end get Posts/:postId 
 
//     .patch((req,res)=>{
//         if(req.body._id){
//             delete req.body._id;
//         }
//         for( let p in req.body ){
//             req.post[p] = req.body[p]
//         }
//         req.post.save()
//         res.json(req.post)
//     })//patch
//     .delete((req,res)=>{
//         req.post.remove(err => {
//             if(err){
//                 res.status(500).send(err)
//             }
//             else{
//                 res.status(204).send('removed')
//             }
//         })
//     })//delete
	 
