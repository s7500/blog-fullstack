import mongoose from 'mongoose'
import { Post, Comment } from "./models.js"
import './db-connect.js'
import faker from 'faker'

// Seed in some data
const seed = async () => {
  
  // CLEANUP data  
  await Comment.deleteMany()
  await Post.deleteMany()

  // INSERT SOME BLOG POSTS
  const posts = await Post.insertMany([
    {
      title: "Relations are coool", 
      author: "Rob", 
      text: "Yay, title says it all. " + faker.lorem.sentences(5)
    },
    {
      title: "Nesting makes sense", 
      author: "Wasabis",
      text: "Nest me if you can. " + faker.lorem.sentences(5)
    },
  ])


  // INSERT SOME COMMENTS TO BLOG POSTS ...

  const comments = await Comment.insertMany([
    { author: "Tick", text: "Yes, yes. Relations. Nice" },
    { author: "Trick", text: "Fuck no. I don't get relations" },
    { author: "Track", text: "Come oooon..." },
    { author: "George", text: "I like nesting. Jaja." },
    { author: "Michael", text: "Nest it, baby. Jaja." },
  ])

  //  SUCCESS REPORT
  console.log(`Seeded ${posts.length} Posts + ${comments.length} comments`)

  // CLOSE CONNECTION TO DATABASE AND FINISH SCRIPT
  await mongoose.connection.close()
}

seed()
