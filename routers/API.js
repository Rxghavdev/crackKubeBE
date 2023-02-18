const express = require("express");
const router = express.Router();
const Blog = require("../Models/Blog");
const User = require("../Models/User");
const Comment = require("../Models/Comment.js");
const Like = require("../Models/Like");
const Follow = require("../Models/Follow");
const Notification = require("../Models/Notification");
const bcrypt = require("bcrypt");


// Blog APIs
//
// get all blog
router.get("/blog/", (request, response) => {
    Blog.find({}, (err, users) => {
      if (!err) {
        response.send(users);
      }
      console.log(err);
    });
  });
  
  // create blog
  router.post("/blog/", (request, response) => {
    Blog.create(request.query, (err, blog) => {
      if (!err) {
        response.send(blog);
      }
      console.log(err);
    });
  });
  
  // get specific blog
  router.get("/blog/:id/", (request, response) => {
    Blog.findOne({ id: request.params.id }, (err, blog) => {
      if (!err) {
        response.send(blog);
      }
      console.log(err);
    });
  });
  
  // update specific blog
  router.put("/blog/:id/", (request, response) => {
    Blog.replaceOne({ id: request.params.id }, request.query, (err, blog) => {
      if (!err) {
        response.send(blog);
      }
      console.log(err);
    });
  });
  
  // delete specific blog
  router.delete("/blog/:id/", (request, response) => {
    Blog.deleteOne({ id: request.params.id }, (err, blog) => {
      if (!err) {
        response.send(blog);
      }
      console.log(err);
    });
  });
  
  //
  // socialMedia APIs
  //
  // get all socialMedia
  router.get("/socialMedia/", (request, response) => {
    socialMedia.find({}, (err, users) => {
      if (!err) {
        response.send(users);
      }
      console.log(err);
    });
  });
  
  // create socialMedia
  router.post("/socialMedia/", (request, response) => {
    socialMedia.create(request.query, (err, socialMedia) => {
      if (!err) {
        response.send(socialMedia);
      }
      console.log(err);
    });
  });
  
  // get specific socialMedia
  router.get("/socialMedia/:id/", (request, response) => {
    socialMedia.findOne({ id: request.params.id }, (err, socialMedia) => {
      if (!err) {
        response.send(socialMedia);
      }
      console.log(err);
    });
  });
  
  // update specific socialMedia
  router.put("/socialMedia/:id/", (request, response) => {
    socialMedia.replaceOne({ id: request.params.id }, request.query, (err, socialMedia) => {
      if (!err) {
        response.send(socialMedia);
      }
      console.log(err);
    });
  });
  
  // delete specific socialMedia
  router.delete("/socialMedia/:id/", (request, response) => {
    socialMedia.deleteOne({ id: request.params.id }, (err, socialMedia) => {
      if (!err) {
        response.send(socialMedia);
      }
      console.log(err);
    });

  });

  //
  // User APIs
  //
  // get all users
  router.get("/user/", (request, response) => {
    User.find({}, (err, users) => {
      if (!err) {
        response.send(users);
      }
      console.log(err);
    });
  });

  // create user
  router.post("/user/", (request, response) => {
    User.create(request.query, (err, user) => {
      if (!err) {
        response.send(user);
      }
      console.log(err);
    });
  });

  // get specific user
  router.get("/user/:id/", (request, response) => {
    User.findOne({ id: request.params.id }, (err, user) => {
      if (!err) {
        response.send(user);
      }
      console.log(err);
    });
  });

  // update specific user
  router.put("/user/:id/", (request, response) => {
    User.replaceOne({ id: request.params.id }, request.query, (err, user) => {
      if (!err) {
        response.send(user);
      }
      console.log(err);
    });
  });

  // delete specific user
  router.delete("/user/:id/", (request, response) => {

    User.deleteOne({ id: request.params.id }, (err, user) => {
      if (!err) {
        response.send(user);
      }
      console.log(err);
    });
  });
  
  //
  // Comment APIs
  //
  // get all comments
  router.get("/comment/", (request, response) => {

    Comment.find({}, (err, comments) => {
      if (!err) {
        response.send(comments);
      }
      console.log(err);
    });
  });

  // create comment
  router.post("/comment/", (request, response) => {
    Comment.create(request.query, (err, comment) => {
      if (!err) {
        response.send(comment);
      }
      console.log(err);
    });
  });

  // get specific comment
  router.get("/comment/:id/", (request, response) => {
    Comment.findOne({ id: request.params.id }, (err, comment) => {
      if (!err) {
        response.send(comment);
      }
      console.log(err);
    });
  });

  // update specific comment
  router.put("/comment/:id/", (request, response) => {
    comment.replaceOne({ id: request.params.id }, request.query, (err, user) => {
      if (!err) {
        response.send(user);
      }
      console.log(err);
    });
  });

  // delete specific comment
  router.delete("/comment/:id/", (request, response) => {
    Comment.deleteOne({ id: request.params.id }, (err, comment) => {
      if (!err) {
        response.send(comment);
      }
      console.log(err);
    });
  });

  //
  // Like APIs
  //
  // get all likes
  router.get("/like/", (request, response) => {
    Like.find({}, (err, likes) => {
      if (!err) {
        response.send(likes);
      }
      console.log(err);
    });
  });

  // create like
  router.post("/like/", (request, response) => {
    Like.create(request.query, (err, like) => {
      if (!err) {
        response.send(like);
      }
      console.log(err);
    });
  });

  // get specific like
  router.get("/like/:id/", (request, response) => {
    Like.findOne({ id: request.params.id }, (err, like) => {
      if (!err) {
        response.send(like);
      }
      console.log(err);
    });
  });

  // update specific like
  router.put("/like/:id/", (request, response) => {
    Like.replaceOne({ id: request.params.id }, request.query, (err, like) => {
      if (!err) {
        response.send(like);
      }
      console.log(err);
    });
  });

  // delete specific like
  router.delete("/like/:id/", (request, response) => {
    Like.deleteOne({ id: request.params.id }, (err, like) => {
      if (!err) {
        response.send(like);
      }
      console.log(err);
    });
  });

  
    
    

  
  module.exports = router;