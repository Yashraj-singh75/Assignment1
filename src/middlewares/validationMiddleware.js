const validation = (schema) => {
    return (req, res, next) => {
        const { err } = schema.validate(req.body);
        if (err) 
        {
            return res.status(400).json({
                message: err.details[0].message,
            });
        } 
        next();
    };
}

module.exports = validation;