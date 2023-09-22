module.exports = (req, res, next) => {
  res.render('404', { message: req.url });
  return;
};
