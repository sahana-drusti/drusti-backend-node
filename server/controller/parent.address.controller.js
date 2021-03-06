const parentAddress = require('../model/parentAddress');
const parentController = require('./parent.controller');

exports.createCurrentAddress = (req, res, next) =>{

    if(!req.body.addressLine1 || !req.body.addressLine2 || !req.body.taluk
        || !req.body.district || !req.body.state || !req.body.country
        || !req.body.zipCode
        ){
        return res.status(400).send({
            message: "mandatory field missing while inserting parent address type C info"
        })
    }

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
        type:"C"
    });

    parentAddressCreate.save()
    .then(data => {return;})
    .catch(err => res.send({message: err || " Error while creating Parent Address" }));
    next();

}

exports.createPermanentAddress = (req, res, next) =>{

    if(!req.body.pAddressLine1 || !req.body.pAddressLine2 || !req.body.pTaluk
        || !req.body.pDistrict || !req.body.pState || !req.body.pCountry
        || !req.body.pZipCode
        ){
        return res.status(400).send({
            message: "mandatory field missing while inserting parent address type P info"
        })
    }

    const parentAddressCreate = new parentAddress({
        addressLine1: req.body.pAddressLine1,
        addressLine2: req.body.pAddressLine2,
        taluk: req.body.pTaluk,
        district: req.body.pDistrict,
        state: req.body.pState,
        country: req.body.pCountry,
        zipCode: req.body.pZipCode,
        phone1: req.body.phone1,
        type: "P"
    });

    parentAddressCreate.save()
    .then(data => {return;})
    .catch(err => res.send({message: err || " Error while creating Parent Address" }));
    next();

}

exports.createMany =async (req,res) =>{
    console.log(req.body.addresses);
    await parentAddress.insertMany(req.body.addresses)
    .then(data => res.send(data))
    .catch(err => res.send({message: 'error inserting many addresses' }));
}