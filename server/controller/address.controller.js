const address = require('../model/address');

exports.create = (req,res) => {
    if((!req.body.addressLine1 || !req.body.addressLine2) && 
    !req.body.userId && !req.body.taluk && !req.body.district
    && !req.body.state && !req.body.taluk && !req.body.zipCode){
        return res.status(400).send({
            message: "mandatory field missing"
        });
    }

    const addressCreate = new address({
        userId: req.body.userId,
        addressLine1: req.body.addressLine1,
        addressLine2: req.body.addressLine2,
        taluk: req.body.taluk,
        district: req.body.district,
        state: req.body.state,
        country: req.body.country,
        status: req.body.status,
        zipCode: req.body.zipCode
    });

    addressCreate.save()
    .then(data => res.send(data))
    .catch(err => {
        res.status(500).send(
            {
                message: err.message || "Some error occurred while creating the Address."
            }
        );
    });
}

exports.findByUserId = (req, res) => {
    const userId = req.query.userId;
    address.find({userId: userId}).then(
        data => res.send(data)
    ).catch(err =>{
        res.status(500).send(
            {
                message: err.message || "Error fetching address"
            }
        )
    })
}

exports.updateAddress = (req,res) => {
    var update = {};
    if(req.body.addressLine1) update['addressLine1'] = req.body.addressLine1;
    if(req.body.addressLine2) update['addressLine2'] = req.body.addressLine2;
    if(req.body.state) update['state'] = req.body.state;
    if(req.body.taluk) update['taluk'] = req.body.taluk;
    if(req.body.district) update['district'] = req.body.district;
    if(req.body.country) update['country'] = req.body.country;
    if(req.body.zipCode) update['zipCode'] = req.body.zipCode;
    if(req.body.phone1) update['phone1'] = req.body.phone1;
    if(req.body.phone2) update['phone2'] = req.body.phone2;
    if(req.body.email1) update['email1'] = req.body.email1;
    if(req.body.email2) update['email2'] = req.body.email2;
    
    const filter = {
        _id: req.body.addressId
    }
    address.findOneAndUpdate(filter, update, {new: true, useFindAndModify: false}).then(
        
       data => res.send(data)
    ).catch(err => {
        res.status(500).send({
            message: err.message || "Error updating address"
        })
    });
}

exports.delete = (req, res) =>{
    address.findByIdAndDelete(req.query.addressId)
    .then(data => res.send(data))
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Error deleting address"
        })
    })
}