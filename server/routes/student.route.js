module.exports =(app) =>{
 const studentController = require('../controller/student.controller');
const middleware = require('../middleware/createStudent');
 
    app.post('/student',middleware,studentController.create);
    app.post('/students',studentController.createMany);
}
