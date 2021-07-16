module.exports =(app) =>{
    const facultyAddressController = require('../controller/faculty.address.controller');
   const middleware = require('../middleware/createFaculty');
    
       app.post('/faculty',middleware,facultyAddressController.createPermanantAddress);
   }
   