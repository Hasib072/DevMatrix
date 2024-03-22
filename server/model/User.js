 const mongoose = require('mongoose')

 const UserSchema = new mongoose.Schema({
   first_name: {
      type: String,
      match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
      required: [true, "can't be blank"],

  },
  last_name: {
      type: String,
      match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
      required: [true, "can't be blank"]
  },
  user_name: {
      type: String,
      unique: true,
      required: [true, "can't be blank"],
      match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
      index: true,
  },
  password: {
      type: String,
      required: true,
      trim: true
  },
  email: {
      type: String,

  },
  dob: {
      type: Date,
      
  },
  bio: {
      type: String,
      
  }
 })

 const UserModel = mongoose.model("User", UserSchema)
 
 module.exports = UserModel