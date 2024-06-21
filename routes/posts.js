import express from 'express'
const router = express.Router()
import {getPostById,getPosts,deletePost,createPost,editPost} from '../controllers/postController.js'

  

//controller is basically a method li tetexecuta ki n3yt l routev
  
  router.get("/", getPosts);
  
  
  router.post("/", createPost);
  
  router.get("/:id", getPostById);

  router.put("/:id", editPost);

  router.delete("/:id", deletePost);

export default router 