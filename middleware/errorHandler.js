const { constants } = require("../consts");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.NOT_FOUND:
      res.json({
        title: "not found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.SERVER_ERROR:
      res.json({
        title: "not found no",
        message: err.message,
        stackTrace: err.stack,
      });
    default:
      break;
  }
};

module.exports = errorHandler;
