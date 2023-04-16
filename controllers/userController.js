
const User = require('../models/userModel');

//login user methods started

const loginLoad = async(req,res)=>{
    try {
        res.render('login');
    } catch (error) {
        console.log(error.message);
    }
}


//verify login
const verifyLogin = async(req,res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;

        const userData = await User.findOne({email:email});
        if(userData){
            if (userData.password == password) {
                req.session.user_id = userData._id;
                res.redirect('/home');
            } else {
                res.render('login',{message:"Email and password is incorrect"});
            }
        }
        else{
            res.render('login',{message:"Email and password is incorrect"});
        }

    } catch (error) {
        console.log(error.message);
    }
}


// view home page
const loadHome = async(req,res)=>{
    try {
        var aa = req.session.user_id;
        res.render('home',{aaa:aa});
    } catch (error) {
        console.log(error.message);
    }
}


//view global rank page
const loadrankdashboard = async(req,res)=>{
    try {
        const usersData = await User.find().sort({score : -1});
        const usersData1 = await User.find().count();
        res.render('rankdashboard',{users:usersData,users1:usersData1});
    } catch (error) {
        console.log(error.message);
    }
}


//logout
const userLogout = async(req,res)=>{
    try {
        req.session.destroy();
        res.redirect('/');
    } catch (error) {
        console.log(error.message);
    }
}


//edit profile's score
const editProfile = async(req,res)=>{
    try {
        
        const id = req.session.user_id;
        const userData1 = await User.findOne({_id:id});

        let score = req.body.hidscore;
        let score1 = userData1.score;
        let total = Number(score)+Number(score1);
        const userData = await User.findByIdAndUpdate({_id:id},{$set:{score:total}});
        res.redirect('/home');

    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    loginLoad,
    verifyLogin,
    loadHome,
    loadrankdashboard,
    userLogout,
    editProfile
}
