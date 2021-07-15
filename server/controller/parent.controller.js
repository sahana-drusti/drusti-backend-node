const Parent = require('../model/parent');


exports.create = async (req,res,next) =>{
   
    if(!req.body.fatherName || !req.body.motherName || !req.body.fOccupation
        || !req.body.mOccupation || !req.body.phone1 || !req.body.email2
        ){
        return res.status(400).send({
            message: "mandatory field missing while inserting parent info"
        })
    }
    
    const parentCreate = new Parent({
        fatherName: req.body.fatherName,
        motherName: req.body.motherName,
        fOccupation: req.body.fOccupation,
        mOccupation: req.body.mOccupation,
        religion: req.body.religion,
        phone1: req.body.phone1,
        phone2: req.body.phone2,
        email1: req.body.email1,
        email2: req.body.email2

    });
    console.log(this.parentDetail);
    if(this.parentDetail == undefined){
        await parentCreate.save()
        .then(data=>{
            
                    this.parentDetail = data._id;                
                })
        
        .catch(err =>res.send({
            message:err||"error adding parent details"
        }))
       
    }
    console.log(this.parentDetail);
    next();
    
    
}

exports.getParentByPhone1 = async (req,res, next) =>{
    //console.log(res.body);
    
    await Parent.find({phone1:req.body.phone1})
    .then(data => {
        if(data){
            
            data.forEach(element => {
                console.log('element'+element._id);
                exports.parentDetail = element._id;
            });
        }
        
    })
    .catch(err => res.send({message: message.err ||'error while fecthing parent info'}) );
    //parentId = data['_id']
    next();
    
    
}