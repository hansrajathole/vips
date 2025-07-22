const express = require("express");

const app = express();


app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get("/", (req, res) => {
  let { name, email } = req.query;
  console.log("name :", name);
  console.log("email :", email);

  res.send("data aa gya");
});

app.post("/", (req, res) => {
    console.log("request aayi");
    
  let {  name , email } = req.body
  console.log("name :", name);
  console.log("email :", email);

  res.send("post route");
});

app.get("/user/:id" , (req, res)=>{
    // const { id } = req.params
    const id = req.params.id
    
    console.log("ye rhi id : ", id);

    
    res.status(500).json({message : "id mil gyi" , id : id})
})

module.exports = app;
