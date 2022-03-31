const verifyUserCredentials = (req, res, next) => {
  const {
    body: { user, password }
  } = req;
  if (user && password) {
    req.user = user;
    req.password = password;
    next();
  } else {
    res.sendStatus(401);
  }
};

export default verifyUserCredentials;
