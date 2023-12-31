


import http, { get } from 'node:http';

const users = []

const server = http.createServer((req, res) => {
    const {method, url} = req;
    if(method === 'GET' && url === '/users'){
        return res.end(JSON.stringify(users));
    }
    if(method === 'POST' && url === '/users'){
        users.push({
            nome: 'Diego',
            email: 'Diego@gmail.com',
            id: '1'
        });
        return res.setHeader('Content-type', 'application/json').writeHead(201).end();
    }

    return res.writeHead(404).end('Not Found');
});

server.listen(3333)