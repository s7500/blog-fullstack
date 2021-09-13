import express from 'express';
import cors from 'cors'
import postsRouter from "./routes/posts.js"
import commentsRouter from "./routes/comments.js"
import './db-connect.js'

const app = express();

app.use( cors() )
app.use( express.json() )

// ROME ROUTE
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// ROUTERS
app.use('/', postsRouter)
app.use('/', commentsRouter)

// API STARTUP
const PORT = 5000
app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});

//Run app, then load http://localhost:5000 in a browser to see the output.