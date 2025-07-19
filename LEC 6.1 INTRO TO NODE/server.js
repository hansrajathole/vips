// console.log("Hello world");
// const sum = require("./math")

// console.log(sum(20 , 40));

const fs = require("fs")
// READFILE
// fs.readFile("mat.js",'utf8',(err , data)=>{
//     if(err){
//         console.log(err);
//         return
//     }else {
//         console.log(data);
        
//     }    
// })

// WRITEFILE
// fs.writeFile("text.txt","kya haal chal",(err)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log("file created successfully");
    
// })


// UPDATE FILE
// fs.appendFile("text.txt"," sab thik hai bhaiiiiii", (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("data appended");
//     }
// })

// DELETE FILE
// fs.unlink("text.txt",(err)=>{
//    if(err){
//     console.log(err);
    
//    }else{
//     console.log("file was deleted");
//    }
    
// })

// fs.mkdir("sample",(err)=>{
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log("folder created");
        
//     }
// })


// fs.readdir("sample", (err, file)=>{
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log(file);
        
//     }
// })  

fs.rmdir("sample",{ recursive: true, force: true }, (err)=>{
    if(err){
        console.log(err);
        
    }else {
        console.log("remove folder");
        
    }
})