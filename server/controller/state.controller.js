const state = require("../model/state")

exports.create = (req, res) => {
    // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "State content can not be empty"
        });
    }

    // Create a State
    const stateCreate = new state({
        name: req.body.name,
    });

    // Save State in the database
    stateCreate.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};

exports.findAll = (req,res) => {
    state.find().then(s =>{
        res.send(s);
    }).catch(err =>{
        res.status(500).send({
            message: err.message ||"Some Error occured while fetching states"
        });
    });
}