const ErrorResponse = require('../utils/errorResponse');


const errorHandler = (err, req, res, next) => {
console.log(err)
  let error = { ...err };
  error.massage = err.message;
  error = req.error;

// mongoose object_ID
if(err.name === "CastError") {

    const message = `user not found with id of ${err.value}`;
    error = new ErrorResponse(message, 404);

  }
  // referenceError and syntaxError in codes
  if(err.name === "ReferenceError" || err.name === "SyntaxError") {
    
    const message = `error in your syntax`;
    error = new ErrorResponse(message, 404);
  }

  // mongoose duplicate_Key
  if(err.code == 11000) {

    const message = `dupicate Key detected`;
    error = new ErrorResponse(message, 400);

  }
  //mongoose ObjectParameterError

  if(err.name === "ObjectParameterError") {

      const message = `the parameters isn't objectId`;
      error = new ErrorResponse(message, 400);
  }

 // mongoose validation_errors

  if(err.name === "ValidationError"){

    const message = Object.values(err.errors).map(val => val.message);
    error = new ErrorResponse(message, 400);

  }
  // Type_error
  if(err.name == 'TypeError') {

    const message = 'data type issues';
    error = new ErrorResponse(message, 400);
  }

  // mongoose connection refused

  if(err.code == "EREFUSED") {
    process.exit()
  }

  if(err.name === "JsonWebTokenError") {
    const message = "not Authorized to access this route";
    error = new ErrorResponse(message, 401)
  }


  res.status(error.statusCode).json({
    success: false,
    error: error.message || "Server Error",
    check: error.path
  });
}

module.exports = errorHandler;