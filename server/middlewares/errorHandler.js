function errorHandler(err, req, res, next) {
  let statusCode, errorMessage, errorCode;
  errorCode = err.name;
  switch (err.name) {
    case "DataNotFound":
      statusCode = 404;
      errorMessage = "Data not found";
      break;
    default:
      statusCode = 500;
      errorMessage = "Internal Server Error";
  }
  res.status(statusCode).json({ errorCode, message: errorMessage });
}
module.exports = errorHandler;
