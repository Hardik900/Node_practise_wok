const http = require("http")
const fs = require("fs")
//const { serialize } = require("v8")

///console.log(http)

const server = http.createServer((req, res)=>{
    //const url  = req.url()
    if(req.url == "/about"){
        res.end("about us page")
    }else if(req.url == "/contactus"){
        res.end("Contact us page")
    }else if(req.url == "/knowmore"){
        res.end("know more page")
    }else if(req.url == "/userapi"){
        const data = fs.readFileSync(`${__dirname}/createApi/data.json`, "utf-8",)
        console.log(data)
        res.end("data")
    }else{
        res.end("<h1>404 Error Page this page is exist in this application</h1>")
    }
    res.end("hellovhfhvbh")
});

server.listen(8003, "127.0.0.1", ()=>{
    //try{
        console.log("server is on port 8003")
    //}
    //catch(e){
    //    console.log(e)
    //}
});