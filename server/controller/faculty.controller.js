const faculty = require('../model/faculty');




exports.create = async (req, res, next) => {
    const facultyCreate = new faculty({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        middleName: req.body.middleName,
        DOB: req.body.dob,
        class: req.body.class,
        gender: req.body.gender,
        religion: req.body.religion,
        userId: req.body.userId,
        
    })
    await facultyCreate.save()
    .then(data => {
        if(data){
            exports.facultyId = data._id;
        }
    })
    .catch(err => res.send({message: err || "Error Creating Faculty"}));

    next();

    
}