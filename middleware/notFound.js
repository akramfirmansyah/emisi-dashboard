module.exports = (req, res, next) => {
  res.status(404);
  res.render('404', { message: req.url });
  return;
};
