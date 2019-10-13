const sql = require('../config/db');

exports.signup = async function (req, res){
    console.log("Signup visited")
    const toquery = "INSERT into user (user_name,user_password) values(?, ?)";
    sql.query(toquery, [req.user, req.password], function (err, res){
        if(err){
            console.log("Error: ", err);
            res(err,null);
        }
        else{
            console.log(res);
        }
    })
}