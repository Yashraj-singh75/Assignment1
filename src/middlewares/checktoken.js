const jwt = require ("jsonwebtoken");

const checkToken = (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({message: "No token found",});
        }


        const user = jwt.verify(token, process.env.secret);
        req.user = user;
        next();
    }
    catch (err) {
        return res.status(401).json({message: "Invalid token",});
    }
};

module.exports = checkToken;