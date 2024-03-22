 const mongoose = require('mongoose')

 const ElementSchema = new mongoose.Schema({
  user_name: {
      type: String,
      // unique: false,
      required: [true, "can't be blank"],
      match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
      index: true,
  },
  element_name: {
      type: String,
      required: [true, "can't be blank"],
      match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
      index: true,
  },
  element_html: {
    type: String,
    required: [true, "can't be blank"],
    default: "Add HTML"
  },
  element_css: {
    type: String,
    default: ""
  },
  element_desc: {
    type: String,
    default: ""
  },
  element_tags: {
    type: [String],
  },
  is_public: {
    type: Boolean,
    default: false
  },
 })

 const ElementModel = mongoose.model("Element", ElementSchema)
 
 module.exports = ElementModel