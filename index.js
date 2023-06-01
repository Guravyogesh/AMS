// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('productList.json'); // <== Will be created later
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 8080; // <== You can change the port

// server.use(middlewares);
// server.use(router);

// server.listen(port);
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router();
const middlewares = jsonServer.defaults();

const jsonFiles = [
  'brandList.json',
  'categoryList.json',
  'productList.json',
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

const port = 3000; // Change to your desired port number
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
