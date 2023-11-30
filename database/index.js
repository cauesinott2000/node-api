const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/noderest", { family: 4 });
mongoose.Promise = global.Promise;

module.exports = mongoose;
