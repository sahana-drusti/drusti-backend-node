const faculty = require('../model/faculty');




exports.create = async (req, res, next) => {
    const facultyCreate = new faculty({
        registerNumber: req.body.registerNumber,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        middleName: req.body.middleName,
        DOB: req.body.dob,
        class: req.body.class,
        gender: req.body.gender,
        religion: req.body.religion,
        userId: req.body.userId,
        phone1:req.body.phone1   
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
exports.createMany = (req,res) =>{
    console.log(req.body.faculties);
    faculty.insertMany(req.body.faculties)
    .then(data => res.send(data))
    .catch(err => res.send({message: 'error inserting many staffs' }));
}