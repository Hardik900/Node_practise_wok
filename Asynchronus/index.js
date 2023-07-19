const fs = require("fs");

fs.writeFile("read.txt","hello my name is Hardik", (error)=>{
    console.log("File Created")
})

fs.appendFile("read.txt", " and my friend name is Samuel", (error) =>{
    console.log("data will be append in the given file")
})

fs.rename("read.txt", "rename_read.txt",(error)=>{
    console.log("fill will be renamed")
})

const read_data = fs.readFile("rename_read.txt","utf-8",(error, read_data)=>{
    console.log("data will be read")
    console.log(read_data)
})

// unlink will use to delete the file
// fs.unlink("rename.txt",()=>{
//     console.log("delete the file")
// })
