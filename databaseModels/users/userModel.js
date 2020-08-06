const db = require('../../db');

exports.AddUser = (data) => {

    return new Promise((resolve,reject)=>{

        db.query('INSERT INTO user SET ? ',data,(error,result)=>{
            if(error)reject(error);
             resolve(result);
         });

    });
}