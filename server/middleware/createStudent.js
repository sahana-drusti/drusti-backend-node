const parentController = require('../controller/parent.controller');
const parentAddressController = require('../controller/parent.address.controller');

module.exports = [
    parentController.getParentByPhone1,
    parentController.create,
    parentAddressController.create
]