const express = require('express');
const user_route = express();

const session = require('express-session');

const config = require('../config/config');
user_route.use(session({secret:config.sessionSecret}));

const auth = require('../middleware/auth');

user_route.set('view engine','ejs');
user_route.set('views','./views/users');

const bodyParser = require('body-parser');
user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({extended:true}));

user_route.use(express.static('public')); //for static files....

const userController = require('../controllers/userController');

//user_route.get('/',auth.isLogout,userController.loginLoad);
user_route.get('/',userController.loginLoad);
user_route.get('/login',userController.loginLoad);

user_route.post('/login',userController.verifyLogin);

user_route.get('/home',userController.loadHome);
user_route.get('/rankdashboard',userController.loadrankdashboard);


user_route.get('/logout',userController.userLogout);

user_route.post('/edit',userController.editProfile);


module.exports = user_route;


