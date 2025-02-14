const http = require('http');
const server = http.createServer((req, res) => {

    console.log("istek gönderildi");
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>MERHABA INDEX</h1>');
    }
    else if (req.url === '/about'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>MERHABA ABOUT</h1>');
    }

    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<h1>404 NOT FOUND</h1>');
    }
    res.end();
});
const port =3000;
server.listen(port,()=>{
    console.log(`server started on port ${port}`);
});