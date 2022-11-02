const mongoose = require("mongoose");

const conexion=()=>{
    return mongoose.connect("mongodb://localhost:27017/gestionEscolar_lab8");
}
module.exports = conexion;