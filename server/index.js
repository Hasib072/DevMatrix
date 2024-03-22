const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require("./model/User")
const ElementModel = require("./model/Element")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://mirrahman:MirPassword72@devmatrixcluster.orok5jg.mongodb.net/?retryWrites=true&w=majority&appName=DevMatrixCluster");

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    UserModel.findOne({email : email})
    .then(user => {
        if(user) {
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            UserModel.findOne({user_name : email})
            .then(user => {
                if(user) {
                    if(user.password === password){
                        res.json("Successfully loggedin " + email)
                    }else{
                        res.json("The password is incorrect")
                    }
                }else{
                    res.json("No record existed")
                }
            })
        }
    })
})

app.post("/register", (req, res) => {
    UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.post("/create", (req, res) => {
    ElementModel.create(req.body)
    .then(element => res.json(element))
    .catch(err => res.json(err))
})

app.get("/elements", (req, res) => {
    ElementModel.find({})
      .then(elements => res.json(elements))
      .catch(err => res.json(err));
  });
  

app.listen(3001, () => {
    console.log("server is running")
})