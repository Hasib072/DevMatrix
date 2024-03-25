 const mongoose = require('mongoose')

 const UserSchema = new mongoose.Schema({
   first_name: {
      type: String,
      match: [/^[a-zA-Z0-9]+$/, 'is invalid']

  },
  last_name: {
      type: String,
      match: [/^[a-zA-Z0-9]+$/, 'is invalid']
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
    required: [true, "Email is required"],
    unique: true, 
    trim: true, 
    lowercase: true,
    validate: {
      validator: function(email) {
        // Simple regex for basic email validation
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },
      message: props => `${props.value} is not a valid email address!`
    },
  },
  dob: {
      type: Date,
      
  },
  bio: {
      type: String,
      
  },
  git_account: {
    type: String,
    
  },
  website: {
    type: String,
}
 })

 const UserModel = mongoose.model("User", UserSchema)
 
 module.exports = UserModel