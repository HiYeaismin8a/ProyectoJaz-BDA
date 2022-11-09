const { Schema, model } = require("mongoose");

const esquema = new Schema({
    _id: Schema.Types.ObjectId, 
    funcion: String,
    hrEntrada: String,
    hrSalida: String,
    extTel: String,
    mail: String,
    curp: String,
    nombre: String,
    tel: String,
    escuela: Schema.Types.ObjectId,
    noBancaria: String,
},
{
    collection:"administrativos"
});
const modelo = model("administrativos",esquema);
module.exports = modelo