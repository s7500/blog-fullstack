import mongoose from "mongoose"
const { Schema, model } = mongoose

const PostSchema = new Schema({
// *** PUT FIELDS HERE...
})

const CommentSchema = new Schema({
// *** PUT FIELDS HERE...
})

export const Post = model("Post", PostSchema)
export const Comment = model("Comment", CommentSchema)
