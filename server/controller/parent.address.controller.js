const parentAddress = require('../model/parentAddress');
const parentController = require('./parent.controller');

exports.create = (req, res, next) =>{

    const parentAddressCreate = new parentAddress({
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
        parentId: parentController.parentDetail
    });

    parentAddressCreate.save()
    .then(data => {return;})
    .catch(err => res.send({message: err || " Error while creating Parent Address" }));
    next();

}