const { Schema, model } = require("mongoose");

const esquema = new Schema({
    _id: Schema.Types.ObjectId,
    curp: String,
    escuela: Schema.Types.ObjectId,
    extTel: String,
    funcion: String,
    hrEntrada: String,
    hrSalida: String,
    mail: String,
    noBancaria: String,
    nombre: String,
    tel: String,
},
{
    collection:"administrativos"
});
const modelo = model("administrativos",esquema);
module.exports = modelo