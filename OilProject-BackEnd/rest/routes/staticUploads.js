const express = require('express');

module.exports = function (app) {
  app.use('/uploads', express.static('uploads'));
};
