const jwt = require('jsonwebtoken');

exports.isAuthorized = async(req,res,next) => {
    const token = req.cookies.token;
    if(!token){
        return res.status(400).json({msg:"token not found"});
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_USER_KEY);
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({mesg:'Token is not valid'});
    }
};