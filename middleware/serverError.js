module.exports = (error, req, res, next) => {
  res.status(500);
  res.render("500", { error: "Internal Server Error" });
  return;
}