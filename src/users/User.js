const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
  NomePersonagem: {
    type: String,
    require: true,
  },
  ImagemPersonagem: {
    type: String,
    require: true,
  },
});

const User = mongoose.model('User', UserSchema)

module.exports = {
    User
}