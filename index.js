const jsonServer = require('json-server');
const server = jsonServer.create();
const router1 = jsonServer.router(brandList.json'); 
const router2 = jsonServer.router(productList.json')
const router3 = jsonServer.router(categoryList.json')
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

server.use(middlewares);
server.use('/brandList', router1);
server.use('/productList', router2);
server.use('/categoryList', router3);

server.listen(port);






