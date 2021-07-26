const student = require('../model/student');
const parentController = require('./parent.controller');



exports.create = async (req, res) => {
    
    if(!req.body.firstName || !req.body.lastName || !req.body.dob
        || !req.body.class || !req.body.gender || !req.body.userId
        ){
        return res.status(400).send({
            message: "mandatory field missing while inserting parent info"
        })
    }

    if(parentController.parentDetail == undefined){
        return res.status(400).send({
            message: "parent Id is empty"
        })
    }

    const studentCreate = new student({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        middleName: req.body.middleName,
        DOB: req.body.dob,
        class: req.body.class,
        gender: req.body.gender,
        phone1: req.body.phone1,
        userId: req.body.userId,
        registerNumber: req.body.registerNumber
    })
    await studentCreate.save()
    .then(data => res.send(data))
    .catch(err => res.send({message: err || "Error Creating Student"}));

    
}

exports.createMany =async (req,res) =>{
    console.log(req.body.students);
    await student.insertMany(req.body.students)
    .then(data => res.send(data))
    .catch(err => res.send({message: 'error inserting many students' }));
}