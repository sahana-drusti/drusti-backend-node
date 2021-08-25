module.exports =(app) =>{
    const facultyAddressController = require('../controller/faculty.address.controller');
   const middleware = require('../middleware/createFaculty');
   const facultyController = require('../controller/faculty.controller');
    

       app.post('/faculty',middleware,facultyAddressController.createPermanantAddress);
       app.post('/faculties',facultyController.createMany);
       app.post('/faddresses',facultyAddressController.createMany);

   }
   