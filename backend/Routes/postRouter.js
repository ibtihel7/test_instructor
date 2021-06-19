const express = require("express");
const Post = require("../models/postModel");
const router = express.Router();
const mongoose = require("mongoose");

// Get all the posts

router.get("/get-posts", (req, res, next) => {
  Post.find()
    .exec()
    .then((docs) => {
      console.log(docs);
      res.status(200).json(docs);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

//  Add a post

router.post("/add-post", (req, res, next) => {
  const post = new Post({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    points: req.body.points,
    user: req.body.user,
    time: req.body.time,
    time_ago: req.body.time_ago,
    comments_count: req.body.comments_count,
    type: req.body.type,
    url: req.body.url,
    domain: req.body.domain,
  });
  post
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Handling POST requests to /posts",
        createdPost: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

// Get post details

router.get("/get-postDetails/:postId", (req, res, next) => {
  const id = req.params.postId;
  Post.findById(id)
    .exec()
    .then((doc) => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// delele a post

router.delete("/delete-post/:postId", (req, res, next) => {
  const id = req.params.postId;
  Post.remove({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
