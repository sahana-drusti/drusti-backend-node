const parentController = require('../controller/parent.controller');
const parentAddressController = require('../controller/parent.address.controller');

module.exports = (app) =>{
    app.post('/parents/',parentController.createMany);
    app.post('/addresses/',parentAddressController.createMany);
}
