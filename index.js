const jsonServer = require('json-server');
const server = jsonServer.create();
// const router = jsonServer.router('json'); // <== Will be created later
const router = jsonServer.router();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; // <== You can change the port

server.use(middlewares);
server.use(router);



const jsonFiles = [
  'brandList.json',
  'categoryList.json',
  'customerList.json',
  // Add more file paths as needed
];

let db = {};
jsonFiles.forEach(file => {
  const jsonData = require(file);
  db = { ...db, ...jsonData };
});

router.db.object = db;

server.listen(port);

