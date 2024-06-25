const mongoose = require("mongoose");
// deifine the mongodb connection url
mongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`);

//setup mongodb connection
const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
});
module.exports = mongoose.model("user", userSchema);
