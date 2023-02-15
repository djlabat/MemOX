const express = require('express')
const app = express()
const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000

fs.readFile('./index.html', function (err, html) {

    if (err) throw err;

    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        console.log('Pokrenut je server na portu 3000');
        response.write("Tekst koji upravo citas je iz fajla server.js, a ovo ispod je iz HTML-a")
        response.write(html);
        response.end("Kraj zahteva.");
    }).listen(port);
});

app.get('/', (req, res) => {
    res.send("Zdravo Svete!")
});