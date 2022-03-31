const tracker = (req, res, next) => {
  res.cookie('tracker', 'you are being tracked now');
  next();
};

export default tracker;
