const jwt = require("jsonwebtoken");
const fetchUser = async (req,res,next) =>{
    const token = req.header("Auth-token");
    if(!token){
        res.status(401).json({
            status:"fail",
            message:"please authenticate using valid token"
        })
    }else{
try {
    const data = jwt.verify(token,"secret_ecom");
    req.email = data;
    next();
} catch (error) {
    res.status(500).json({
        status:"error",
        message:"please authenticate using valid token"
    })
}
    }
}

module.exports = fetchUser;