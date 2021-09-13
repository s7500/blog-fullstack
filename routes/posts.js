import express from 'express'
import { Post, Comment } from '../models.js'

const router = express.Router()

router.get("/posts", async (req, res, next) => {
  try {
    const posts = await Post.find()
    res.json( posts )
  }
  catch(err) {
    next(err)
  }
})

router.get("/posts/:id", async (req, res, next) => {
  try {
    const post = await Post.findById( req.params.id )
    res.json( post )
  }
  catch(err) {
    next(err)
  }
})

router.get("/posts/:id/comments", async (req, res, next) => {
  try {
    const comments = await Comment.find( { post: req.params.id } )
    res.json( comments )
  }
  catch(err) {
    next(err)
  }
})


router.post("/posts", async (req, res, next) => {
  try {
    const postNew = await Post.create( req.body  )
    res.json( postNew )
  }
  catch(err) {
    next(err)
  }
})

router.put("/posts/:id", async (req, res, next) => {
  try {
    const postUpdated = await Post.findByIdAndUpdate( req.params.id, req.body, { new: true } )
    res.json( postUpdated )
  }
  catch(err) {
    next(err)
  }
})

router.delete("/posts/:id", async (req, res, next) => {
  try {
    const postDeleted = await Post.findByIdAndDelete( req.params.id )
    res.json( postDeleted )
  }
  catch(err) {
    next(err)
  }
})

export default router