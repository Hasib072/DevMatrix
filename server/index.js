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
    ElementModel.find()
      .then(elements => res.json(elements))
      .catch(err => res.json(err));
  });

  app.get("/users", (req, res) => {
    UserModel.find()
      .then(user => res.json(user))
      .catch(err => res.json(err));
  });

  app.get("/users/:username", (req, res) => {
    const { username } = req.params;

    UserModel.findOne({ user_name: username })
      .then(user => {
        if (!user) {
          return res.status(404).json({ error: "User not found" });
        }
        res.json(user);
      })
      .catch(err => res.status(500).json(err));
});

app.put('/updateuserbio/:username', async (req, res) => {
  const { username } = req.params;
  const { bio } = req.body;

  try {
      const updatedUser = await UserModel.findOneAndUpdate({ user_name: username }, { bio: bio }, { new: true });
      if (!updatedUser) return res.status(404).send('User not found');
      res.json(updatedUser);
  } catch (error) {
      res.status(500).send(error.toString());
  }
});

app.get("/elements/by-user", (req, res) => {
    // Extract user_name from the request query parameters
    const userName = req.query.user_name;
    // Check if user_name was provided
    if (!userName) {
      return res.status(400).json({ error: "user_name query parameter is required" });
    }
  
    // Find elements by user_name
    ElementModel.find({ user_name: userName })
      .then(elements => res.json(elements))
      .catch(err => res.status(500).json(err));
  });

  app.delete("/delelements", (req, res) => {
    // Extract user_name and element_name from query parameters
    const { user_name, element_name } = req.query;
  
    // Check if both query parameters are provided
    if (!user_name || !element_name) {
      return res.status(400).json({ error: "user_name and element_name query parameters are required" });
    }
  
    // Use both parameters to find and delete the element
    ElementModel.findOneAndDelete({ user_name: user_name, element_name: element_name })
      .then(deletedElement => {
        if (!deletedElement) {
          // No element found to delete
          return res.status(404).json({ error: "Element not found" });
        }
        // Element deleted successfully
        res.json({ message: "Element deleted successfully" });
      })
      .catch(err => {
        // Handle errors (e.g., database errors)
        res.status(500).json({ error: "Server error" });
      });
  });
  
  app.put("/elements/like", (req, res) => {
    const { user_name, element_name } = req.query;
  
    // Validate the presence of user_name and element_name
    if (!user_name || !element_name) {
      return res.status(400).json({ error: "user_name and element_name query parameters are required" });
    }
  
    // Find the element and increment the likes counter
    ElementModel.findOneAndUpdate(
      { user_name: user_name, element_name: element_name },
      { $inc: { likes: 1 } }, // Increment likes
      { new: true } // Return the updated document
      
    )
    .then(updatedElement => {
        console.log(updatedElement);
      if (!updatedElement) {
        return res.status(404).json({ error: "Element not found" });
      }
      res.json({ message: "Element liked successfully", element: updatedElement });
    })
    .catch(err => {
      res.status(500).json({ error: "Server error" });
    });
  });
  

app.listen(3001, () => {
    console.log("server is running")
})