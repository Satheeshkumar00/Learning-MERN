const errHandler = (err,request,response,next) => {
    const statusCode = response.statusCode? response.statusCode : 500;
    response.status(statusCode);

    response.json({
        msg: err.message,
        stack: err.stack
    });
};

module.exports = {
    errHandler
}