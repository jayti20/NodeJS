const http=require('http')
const fs=require('fs')
const hostname='127.0.0.1'
const port=8080
/*const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader("Content-type","text/plain")
    res.end("Hello World")
})*/
fs.readFile("index.html",(err,content)=>{
    if(err)
    throw err
    else
    {
        const server=http.createServer((req,res)=>{
            res.statusCode=200
            res.setHeader("Content-type","text/html")
            res.end(content)
        })
        server.listen(port,hostname,()=>{
            console.log("Listening to port",port)
        })
    }
})
/*fs.writeFile("myFile.txt","Hello World from my file",(err)=>{
    if(err)
    throw err
    else
    {
        console.log("Hurrah")
    }
})
server.listen(port,hostname,()=>{
    console.log('Server started at port',port)
})*/