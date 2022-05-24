var userdb = require('../model/model');


// creating api
// create and save new user

exports.create = (req,res) => {
    // validate request
    if(!req.body){
        res.status(400).send({message:"content can not be empty"});
        return;
    }
    // new user
    const user = new userdb({
        name : req.body.name,
        email : req.body.email,
        phone : req.body.number,
        city : req.body.city,
        postcode : req.body.postcode,
        
    })
    // save user in the database
    user
    .save(user)
    .then(data =>{
        // res.send(data)
        res.redirect('/add-user')
    })
    .catch(err =>{
        res.status(500).send({
           message: err.message || "some error occured while creating a create operation"
        });
    });
}

// retrive and return all users/ retrive and return  an single user

exports.find= (req,res) => {

    if(req.query.id){
        const id = req.query.id;
        userdb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:"not found user with id = "+ id})
            }
            else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:"error retriving user with id" + id})
        })
    }
    else{
        userdb.find()
        .then(user=>{
            res.send(user)
        })
        .catch(err=>{
            res.status(500).send({message:err.message||"error accured while retriving the user information"})
        })
    }
    
   
}


// update an new identified user by user id

exports.update = (req,res) => {
    if(!req.body){
        return res
        .status(400)
        .send({message: "data to update can not be empty"})
    }
    const id = req.params.id;
    userdb.findByIdAndUpdate(id, req.body, { useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(400).send({message:`cannot update user with ${id}. maybe user not found`})
        }
        else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status({message:"Error update user information"})
    })
}


// detete a user by specified user id

exports.delete = (req,res)=>{
     const id = req.params.id;

     userdb.findByIdAndDelete(id)
     .then(data => {
         if(!data){
             res.status(400).send({message:`cannot delete user with ${id}. maybe id is  not found or wrong`})
         }
         else{
             res.send({
                 message:"User was deleted Succesfilly"
                })
         }
     })
     .catch(err=>{
         res.status(500).send({message:"could not delete the userwith id = " + id})
     });
}