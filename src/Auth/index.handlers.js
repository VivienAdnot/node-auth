exports.register = (req, res, next) => {

    res.data = {
        data: "register done"
    };

    next();

}