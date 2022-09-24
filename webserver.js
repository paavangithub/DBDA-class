//we want to build web server;
const http=require('http');

var server=http.createServer((request,response)=>{
    console.log("request is recieved from client");
    response.write("<h1>Welcome to IACSD </h1>");
response.write("<ol><li>DBDA</li><li>PGDAC</li><li>DITISS</li></ol>");
response.end();
});
server.listen(9000);
console.log("HTTP server is listening on port 9000"); 