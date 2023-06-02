// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router1 = jsonServer.router('brandList.json'); 
// const router2 = jsonServer.router('productList.json');
// const router3 = jsonServer.router('categoryList.json');
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 8080;

// server.use(middlewares);
// server.use(router1);
// server.use(router2);
// server.use(router3);

// server.listen(port);
const jsonServer = require('json-server');

const server = jsonServer.create();

const middlewares = jsonServer.defaults();

const files = ['./brandList.json', './categoryList.json'];

const port = process.env.PORT || 8080; server.use(middlewares);

const combinedData = {};

files.forEach((filePath) => { const data = require(filePath); Object.assign(combinedData, data); });

const router = jsonServer.router(combinedData);

server.use(router);

server.listen(port, () => { console.log(`JSON Server is running on port ${port}`); });





