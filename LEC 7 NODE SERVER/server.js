const http = require("http")

let server = http.createServer((req , res)=>{
    if(req.url === "/" && req.method === "GET"){
        res.end("home route from get")


    }
    if(req.url === "/" && req.method === "POST"){
        res.end("home route from post")

    }
    if(req.url === "/about"){  
        res.end("About Page")
    }
})
let PORT = 3000
server.listen(PORT, ()=>{
    console.log("server is running on port no : ",PORT);
    
})