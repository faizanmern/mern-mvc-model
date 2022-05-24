const axios = require('axios')

exports.HomeRoute = function(req, res) {
    // make a get request to to api  /api/users
    axios.get('http://localhost:3000/api/users')
    .then(function(responce){
        console.log(responce.data)
        res.render('index',{users: responce.data})
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.add_user = function(req, res) {
    res.render('add_user');
}

exports.update_user = (req, res) =>{
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}