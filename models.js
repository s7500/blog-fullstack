import mongoose from "mongoose"
const { Schema, model } = mongoose

// Relation => help the CHILD to find its PARENT!

const PostSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  author: { type: String, required: true }
}, {
  versionKey: false, // get rid of fu**** __v 
  timestamps: true // => createdAt and updatedAt => it will update it automatically
})

const CommentSchema = new Schema({
  text: { type: String, required: true },
  author: { type: String, required: true },  
  postId: {
    type: Schema.Types.ObjectId, // => datatype for IDs
    ref: 'Post' // => to find the parent => please talk to the POST manager and hand over this ID to look up the parent
  }
}, {
  versionKey: false, // get rid of fu**** __v 
  timestamps: true
})

export const Post = model("Post", PostSchema)
export const Comment = model("Comment", CommentSchema)
