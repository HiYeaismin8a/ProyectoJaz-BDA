const { Schema, model } = require("mongoose");

const esquema = new Schema({
    _id: Schema.Types.ObjectId,
    areaEspecialidad: String,
    curp: String,
    escuela: Schema.Types.ObjectId,
    noBancaria: String,
    noTelIns: String,
    nombre: String,
    tel: String
},
{
    collection: "mantenimiento"
});
const modelo = new model("mantenimiento", esquema);
module.exports = modelo