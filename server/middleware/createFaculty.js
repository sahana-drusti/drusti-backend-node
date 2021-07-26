const facultyController = require('../controller/faculty.controller');
const facultyAddressController = require('../controller/faculty.address.controller')

module.exports = [
    facultyController.create,
    facultyAddressController.createCurrentAddress
]