module.exports = (error, req, res, next) => {
  res.status(500);
  res.send(error.message);
  return;
}