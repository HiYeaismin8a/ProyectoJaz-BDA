const { Schema, model } = require("mongoose");

const esquema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    administrativos: [Schema.Types.ObjectId],
    alumnos: [Schema.Types.ObjectId],
    cd: String,
    clave: String,
    direccion: String,
    docentes: [Schema.Types.ObjectId],
    mantenimiento: [Schema.Types.ObjectId],
    nombre: String,
  },
  {
    collection: "escuelas"
  }
);

const modelo = model("escuelas", esquema);
module.exports = modelo
