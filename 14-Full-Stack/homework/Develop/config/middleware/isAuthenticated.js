module.exports = function(req, res, next) {
  // approved login
  if (req.user) {
    return next();
  }
  // redirect if not logged in
  return res.redirect("/");
};
