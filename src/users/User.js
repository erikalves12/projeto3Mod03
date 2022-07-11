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
