var jws = require('jws');

const SECRET_KEY = "1234567890ABCDEF";

exports.register = (req, res, next) => {

    const { email } = req.body;

    const signature = jws.sign({
        header: {
            alg: 'HS256'
        },
        payload: {
            username: email
        },
        secret: SECRET_KEY
    });

    res.data = {
        signature
    };

    next();

}

exports.authenticate = (req, res, next) => {

    const { signature } = req.params;

    const payload = jws.decode(signature);
    console.log(payload);

    res.data = {
        isAuthenticated: jws.verify(signature, 'HS256', SECRET_KEY)
    };

    next();

}