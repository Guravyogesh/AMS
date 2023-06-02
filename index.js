const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(data); // <== Will be created later
const middlewares = jsonServer.defaults();
const posts = ['brandList.json', 'productList.json', 'categoryList.json'];
const data = { posts };
server.use(middlewares);
server.use(router);

server.listen(8080, () => {
  console.log('JSON Server is running on port 3000');
});






