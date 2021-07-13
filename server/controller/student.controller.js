const student = require('../model/student');
const parentController = require('./parent.controller');



exports.create = async (req, res) => {
    const studentCreate = new student({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        middleName: req.body.middleName,
        DOB: req.body.dob,
        class: req.body.class,
        gender: req.body.gender,
        parentId: parentController.parentDetail,
        userId: req.body.userId
        
    })
    await studentCreate.save()
    .then(data => res.send(data))
    .catch(err => res.send({message: err || "Error Creating Student"}));

    
}