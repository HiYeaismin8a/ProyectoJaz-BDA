const { Schema, model } = require("mongoose");

const esquema = new Schema({
  _id: Schema.Types.ObjectId,
  areaEspecialidad: String,
  curp: String,
  noBancaria: String,
  noTelIns: String,
  nombre: String,
  tel: String
},
{
    collection:"docente"
});

const modelo = new model("docente", esquema);
module.exports = modelo
