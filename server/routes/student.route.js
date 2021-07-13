module.exports =(app) =>{
 const studentController = require('../controller/student.controller');
const middleware = require('../middleware/createStudent');
 
    app.post('/student',middleware,studentController.create);
}
