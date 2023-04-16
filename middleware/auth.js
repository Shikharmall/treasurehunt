

const isLogin = async(res,req,next)=>{
   try {
     if (req.session.user_id) {
        
     } else {
        res.redirect('/');
     }
     next(); //site loder is run and run and not move further......
   } catch (error) {
    console.log(error.message);
   }
}

const isLogout = async(res,req,next)=>{
    try {
      if (req.session.user_id) {
         res.redirect('/home');
      }
      next();
    } catch (error) {
     console.log(error.message);
    }
 }


 module.exports = {
    isLogin,
    isLogout
 }