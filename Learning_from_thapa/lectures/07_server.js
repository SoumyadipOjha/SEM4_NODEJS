const http = require("http");
const server = http.createServer((req, res) => {    
    if(req.url === "/"){
        res.end("hello from home side");
    }
    else if(req.url === "/about"){
        res.end("about page");
    }
    else if(req.url === "/contact"){
        res.end("contact page");
    }
    else {
        res.writeHead(404,{"Content-type": "text/html"});
        res.end("<h1>page not found</h1>");
        // proper status code not coming..its coming 200 istead of 404
    }
});
server.listen(3200, "127.0.0.1", () => {
    console.log("server running");
    
});
