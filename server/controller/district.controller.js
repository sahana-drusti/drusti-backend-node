const districtModel = require('../model/district');

exports.create = (req, res) => {
    // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "State content can not be empty"
        });
    }

    // Create a State
    const districtCreate = new districtModel({
        name: req.body.name,
        state: req.body.state,
    });

    // Save State in the database
    districtCreate.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};

exports.findByState = (req,res) =>{
    districtModel.find({state: req.params.state})
    .then(district =>{
        if(!district){
            return res.status(404).send({
                message: "district not found with state " + req.params.state
            });
        }
        res.send(district);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "district not found with state " + req.params.state
            });                
        }
        return res.status(500).send({
            message: "Error retrieving district with state " + req.params.state
        });
    });
   
}