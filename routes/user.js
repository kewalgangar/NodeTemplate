var express = require('express');
var router = express.Router();
var md5 = require('md5');
var userModel = require('../databaseModels/users/userModel');

router.post('/addUser',(req,res)=>{

    var values = req.body;
    // validations

    var data = {

    };
    try
    {
        userModel.AddUser(data).then(callback=>{

            res.send(callback).sendStatus(200);
        })
        .catch(error=>{

            res.send(error).sendStatus(500);
        });
    }
    catch(error)
    {
        res.send(error).sendStatus(500);
    }

});



module.exports = router;