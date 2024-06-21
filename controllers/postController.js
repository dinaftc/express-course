
let posts = [
    { id: 1, name: "dina" },
    { id: 2, name: "express" },
  ];


// get all posts
export const getPosts = (req, res) => {
    const limit = parseInt(req.query.limit);
    if (!isNaN(limit) && limit >0){
       res.json(posts.slice(0,limit));
    }
    else{
       res.status(200).json(posts);
    }
     
   }

// get post by id 
 export const getPostById = (req, res,next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
  
    if(!post){
    const error = new Error(`A post with id ${id} not found` );
    error.status = 404;
    return next(error);}
    
    res.status(200).json(post);
  }


// create post 
export const createPost = (req, res,next) => {
    console.log(req.body);
    const newPost =  {
      id : posts.length +1,
      name: req.body.name
    }
    if (!newPost.name){
      const error = new Error('Please include name')
      error.status = 400
      return next(error);
      //return res.status(400).json({msg:'please include name'})
    }
    posts.push(newPost);
    res.status(201).json(posts);
     }

// edit post 
export const editPost = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
  
    if (!post) {
      return res.status(404).json({ msg: `A post with id ${id} not found` });
    }
  
    if (req.body.name) {
      post.name = req.body.name;
    }
  
    res.status(200).json(post);
  }

// delete post

export const deletePost = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
  
    if (!post) {
      return res.status(404).json({ msg: `A post with id ${id} not found` });
    }
    posts = posts.filter((post)=> post.id !==id )
  
    res.status(200).json(posts);
  }


