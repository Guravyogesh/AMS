const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router();
const middlewares = jsonServer.defaults();

const jsonFiles = [
  'brandList.json.json',
  'productList.json',
  'categoryList.json',
  // Add more file paths as needed
];

let db = {};
jsonFiles.forEach(file => {
  const jsonData = require(file);
  db = { ...db, ...jsonData };
});

router.db.object = db;

server.use(middlewares);
server.use(router);

const port = 8080; // Change to your desired port number
server.listen(port);

