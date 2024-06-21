
const port = process.env.PORT || 8000;
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import { fileURLToPath } from 'url';
const app = express();
import express from 'express'
import path from 'path';
import posts from './routes/posts.js'
import notFound from './middleware/notFound.js';

// setup static folder
//ki nkhdm b module mtmchich wahdha
const __filename = fileURLToPath(import.meta.url) // file://path => path
const __dirname = path.dirname(__filename)
app.use(express.static(path.join(__dirname,'public')))// use hadi middlewear tmchi bin incom rqst outcom resp

// app.get('/',(req,res)=>{
//     //res.send('hello mf')
//     //f la page tlgayha, t9dri tdiri html wla json (ydirlo stringify whdo)
// a
// });

//body parser middlewear*
// lazm 9bel e routes
//middlewear fl app m3ntha no matter wshmn route runni had middlewear bsh ki ykon dakhzel route (only f hdk route)
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use(logger)
//Routes
app.use('/api/posts',posts);

app.use(notFound)

app.use(errorHandler)

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
