#!/usr/bin/env node
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const http = require('http');
const fs = require('node:fs');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {

    const url = req.url;
    console.log(url)
    
    let path = "./html-pages/"

    if (url === '/') {

        path += 'index.html'
        res.statusCode = 200;

    } else if (url === '/about') {

        path += 'about.html'
        res.statusCode = 200;

    } else if (url === '/contact-me') {
    
        path += 'contact-me.html'  
        res.statusCode = 200;

    } else {

        path += '404.html'   
        res.statusCode = 404;

    }

    res.setHeader('Content-Type', 'text/html');

    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(err)
            res.end('Error');

        } else {

            res.end(data);

        }
    })
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
