const { Schema, model } = require("mongoose");

const esquema = new Schema({
    _id: Schema.Types.ObjectId,
    areaEspecialidad: String,
    creditoTutoria_Firmada: Boolean,
    curp: String,
    escuela: Schema.Types.ObjectId,
    fechaIncripcion: String,
    fechaNac: String,
    gradoAcademico: String,
    noBancaria: String,
    noOficina: String,
    nombre: String,
    tel: String,
    tutor: Schema.Types.ObjectId
},
{
    colletion: "alumnos"
});
const modelo = model("alumnos", esquema);
module.exports = modelo