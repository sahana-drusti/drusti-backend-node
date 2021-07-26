const users = require('../model/users');

exports.create = (req, res) =>{
     if(!req.body.name && !req.body.email && !req.body.reg_no && !req.body.password){
        return res.status(400).send({
            message: "mandatory field missing"
        });
     }
console.log(req.body);
     const usersCreate = new users({
        name: req.body.name,
        email: req.body.email,
        reg_no: req.body.reg_no,
        password: req.body.password
     });

     usersCreate.save()
     .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Users."
        });
    });
}


exports.findUser = (req, res) =>{
    const email = req.query.email;
    users.findOne({email:email}).then(data=>{
        res.send(data);
    }).catch(err =>{
        res.status(500).send({
            message: err.message ||"Some Error occured while fetching user data"
        });
    });
}

exports.update = (req,res) =>{
    const update = {
        password: req.body.password
    };

    const filter = {
        _id:req.query.userId
    };
    users.findOneAndUpdate(update,filter,{new: true, useFindAndModify: false}).then(data =>{
        res.send(data);
    }).catch(err =>{
        res.status(500).send({
            message: err.message || "Error while updating user"
        })
    })
}