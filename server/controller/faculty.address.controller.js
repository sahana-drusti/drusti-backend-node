const facultyAddress = require('../model/facAddress');
const facultyController = require('./faculty.controller.js');

exports.createPermanantAddress = (req, res) =>{

    if(!req.body.pAddressLine1 || !req.body.pAddressLine2 || !req.body.pTaluk
        || !req.body.pDistrict || !req.body.pState || !req.body.pCountry
        || !req.body.pZipCode
        ){
        return res.status(400).send({
            message: "mandatory field missing while inserting faculty address type P info"
        })
    }

    const facultyAddressCreate = new facultyAddress({
        addressLine1: req.body.pAddressLine1,
        addressLine2: req.body.pAddressLine2,
        taluk: req.body.pTaluk,
        district: req.body.pDistrict,
        state: req.body.pState,
        country: req.body.pCountry,
        zipCode: req.body.pZipCode,
        facultyId: facultyController.facultyId,
        type: "P"
    });

    facultyAddressCreate.save()
    .then(data => {return;})
    .catch(err => res.send({message: err || " Error while creating Faculty permanant Address" }));

}

exports.createCurrentAddress = (req, res,next) =>{

    if(!req.body.addressLine1 || !req.body.addressLine2 || !req.body.taluk
        || !req.body.district || !req.body.state || !req.body.country
        || !req.body.zipCode
        ){
        return res.status(400).send({
            message: "mandatory field missing while inserting faculty address type C info"
        })
    }

    const facultyAddressCreate = new facultyAddress({
        addressLine1: req.body.addressLine1,
        addressLine2: req.body.addressLine2,
        taluk: req.body.taluk,
        district: req.body.district,
        state: req.body.state,
        country: req.body.country,
        status: req.body.status,
        zipCode: req.body.zipCode,
        type:"C",
        facultyId: facultyController.facultyId
    });

    facultyAddressCreate.save()
    .then(data => res.send(data))
    .catch(err => res.send({message: err || " Error while creating Parent Address" }));
    next();

}