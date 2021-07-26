const facultyAddress = require('../model/facAddress');
const facultyController = require('./faculty.controller.js');

exports.create = (req, res) =>{

    const facultyAddressCreate = new facultyAddress({
        addressLine1: req.body.addressLine1,
        addressLine2: req.body.addressLine2,
        taluk: req.body.taluk,
        district: req.body.district,
        state: req.body.state,
        country: req.body.country,
        status: req.body.status,
        zipCode: req.body.zipCode,
        phone1: req.body.phone1,
        phone2: req.body.phone2,
        email1: req.body.email1,
        email2: req.body.email2,
        facultyId: facultyController.facultyId
    });

    facultyAddressCreate.save()
    .then(data => res.send(data))
    .catch(err => res.send({message: err || " Error while creating Parent Address" }));

}
exports.createMany = (req,res) =>{
    console.log(req.body.addresses);
    facultyAddress.insertMany(req.body.addresses)
    .then(data => res.send(data))
    .catch(err => res.send({message: 'error inserting many staff addresses' }));
}