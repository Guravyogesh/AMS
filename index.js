const jsonServer = require('json-server');

const server = jsonServer.create();

const middlewares = jsonServer.defaults();

const files = ['./brandList.json', './categoryList.json',
 './countrys.json', './currencySettings.json', './customerList.json', './customerReport.json', './datatables.json', 
 './editpermisssion.json', './expenseCategoryList.json', './expenseList.json', './groupPermission.json', './inventoryReport.json',
  './invoiceReport.json', './paymentSettings.json', './peopleUserList.json', './pos1.json', './pos2.json',
   './pos3.json', './productList.json', './purchaseList.json', './purchaseOrderReport.json', './purchaseReport.json',
    './purchaseReturnList.json', './quotationList.json', './salesList.json', './salesListModal.json', './salesReport.json',
     './salesreturnLists.json', './scheduleevents.json', './stateList.json', './storeList.json', './subcategoryList.json',
      './supplierList.json', './supplierReport1.json', './supplierReport2.json', './supplierReport3.json', './taxRates.json',
       './transferList.json', './userList.json'];

const port = process.env.PORT || 8080; server.use(middlewares);

const combinedData = {};

files.forEach((filePath) => { const data = require(filePath); Object.assign(combinedData, data); });

const router = jsonServer.router(combinedData);

server.use(router);

server.listen(port, () => { console.log(`JSON Server is running on port ${port}`); });





