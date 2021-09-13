import mongoose from 'mongoose'

const strConn = "mongodb://localhost/blog_db-fbw48?retryWrites=true&w=majority"

mongoose.connect(strConn, {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
.then(() => console.log("Connection to database established!"))
.catch((err) => console.log("[ERROR] Connection failed!"))
