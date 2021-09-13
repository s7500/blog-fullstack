import express from 'express' 
import { Comment } from '../models.js'
const router = express.Router()

router.get("/comments", async (req, res, next) => {
  try {
    const comments = await Comment.find()
    res.json( comments )
  }
  catch(err) {
    next(err)
  }
})

router.get("/comments/posts", async (req, res, next) => {
  try {
    const comments = await Comment.find().populate("post")
    res.json( comments )
  }
  catch(err) {
    next(err)
  }
})


router.get("/comments/:id", async (req, res, next) => {
  try {
    const comment = await Comment.findById( req.params.id )
    res.json( comment )
  }
  catch(err) {
    next(err)
  }
})

router.post("/comments", async (req, res, next) => {
  try {
    const commentNew = await Comment.create( req.body  )
    res.json( commentNew )
  }
  catch(err) {
    next(err)
  }
})

router.put("/comments/:id", async (req, res, next) => {
  try {
    const commentUpdated = await Comment.findByIdAndUpdate( req.params.id, req.body, { new: true } )
    res.json( commentUpdated )
  }
  catch(err) {
    next(err)
  }
})

router.delete("/comments/:id", async (req, res, next) => {
  try {
    const commentDeleted = await Comment.findByIdAndDelete( req.params.id )
    res.json( commentDeleted )
  }
  catch(err) {
    next(err)
  }
})

export default router