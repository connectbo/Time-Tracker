const sql = require('../config/db');

exports.signup = async function (req, res){
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

exports.login = async function(req, res){
    const toquery = "select user_password from user where user_name = ?";
    sql.query(toquery, req.user, function (err, res){
        if(err){
            console.log("Error: ", err);
            res(err,null);
        }
        else{
            console.log(res);
        }
    })
}

exports.insertActivity = async function (req, res){
    const toquery = "INSERT into activity (activity_title,user_id) values(?, ?)";
    sql.query(toquery, [req.activity_title, req.user_id], function (err, res){
        if(err){
            console.log("Error: ", err);
            res(err,null);
        }
        else{
            console.log(res);
        }
    })
}

exports.deleteActivity = async function (req, res){
    const toquery = "DELETE from activity (activity_id, activity_title,user_id) where activity_id = ? AND user_id = ?)";
    sql.query(toquery, [req.activity_id, req.user_id], function (err, res){
        if(err){
            console.log("Error: ", err);
            res(err,null);
        }
        else{
            console.log(res);
        }
    })
}

exports.insertTimeline = async function (req, res){
    const toquery = "INSERT into timeline (timeline_start, timeline_end, activity_id, user_id) values(?,?,?,?)";
    sql.query(toquery, [req.timeline_start, req.timeline_end, req.activity_id, req.user_id], function (err, res){
        if(err){
            console.log("Error: ", err);
            res(err,null);
        }
        else{
            console.log(res);
        }
    })
}

exports.getActivity = async function (req, res){
    const toquery = "select * from activity where user_id = ?";
    sql.query(toquery, [req.user_id], function (err, res){
        if(err){
            console.log("Error: ", err);
            res(err,null);
        }
        else{
            console.log(res);
        }
    })
}