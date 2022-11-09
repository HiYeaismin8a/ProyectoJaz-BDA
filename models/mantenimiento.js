const { Schema, model } = require("mongoose");

const esquema = new Schema({
    _id: Schema.Types.ObjectId,
    areaEspecialidad: String,
    curp: String,
    nombre: String,
    tel: String,
    noBancaria: String,
    escuela: Schema.Types.ObjectId,
},
{
    collection: "mantenimiento"
});
const modelo = new model("mantenimiento", esquema);
module.exports = modelo