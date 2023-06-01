const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('productList.json'); // <== Will be created later
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; // <== You can change the port
const jsonFiles = [
    'brandList.json',
    'categoryList.json',
//     'path/to/file3.json',
    // Add more file paths as needed
  ];
server.use(middlewares);
server.use(router);

server.listen(port);

