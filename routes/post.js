const conectores = require("./conexion");
const conexion = conectores.mongo;
const redis = conectores.redis();
const { Types } = require("mongoose");

const postAdministrativos = (req, res) => {
  conexion().then(() => {
    const modelo = require("../models/administrativos");
    const administrativo = new modelo({
      _id: Types.ObjectId(req.body._id),
      funcion: req.body.funcion,
      hrEntrada: req.body.hrEntrada,
      hrSalida: req.body.hrSalida,
      extTel: req.body.extTel,
      mail: req.body.mail,
      curp: req.body.curp,
      nombre: req.body.nombre,
      tel: req.body.noBancaria,
      noBancaria: req.body.noBancaria,
      escuela: Types.ObjectId(req.body.escuela),
    });
    administrativo
      .save()
      .then((administrativo) => {
        redis.connect().then(() => {
          redis.set(
            `ADMINISTRATIVOS:POST:${new Date().toUTCString()}`,
            `Registro de administrativo ${administrativo._id}`
          );
          redis.quit();
        });
        res.header("Access-Control-Allow-Origin", "*").json(administrativo);
      })
      .catch((err) => {
        redis.connect().then(() => {
          redis.set(
            `ADMINISTRATIVOS:POST:${new Date().toUTCString()}`,
            err.message
          );
          redis.quit();
        });
      });
  });
};

const postAlumnos = (req, res) => {
  conexion().then(() => {
    const modelo = require("../models/alumnos");
    const alumnos = new modelo({
      _id: Types.ObjectId(req.body._id),
      curp: req.body.curp,
      nombre: req.body.nombre,
      fechaNac: req.body.fechaIncripcion,
      fechaIncripcion: req.body.fechaIncripcion,
      gradoAcademico: req.body.gradoAcademico,
      creditoTutoria_Firmada: req.body.creditoTutoria_Firmada,
      tutor: Types.ObjectId(req.body.tutor),
      escuela: Types.ObjectId(req.body.escuela),
    });
    alumnos
      .save()
      .then((alumnos) => {
        redis.connect().then(() => {
          redis.set(
            `Alumnos:POST:${new Date().toUTCString()}`,
            `Registro de alumnos ${alumnos._id}`
          );
          redis.quit();
        });
        res.header("Access-Control-Allow-Origin", "*").json(alumnos);
      })
      .catch((err) => {
        redis.connect().then(() => {
          redis.set(
            `alumnos:POST:${new Date().toUTCString()}`,
            err.message
          );
          redis.quit();
        });
      });
  });
};

const postDocentes = (req, res) => {
  conexion().then(() => {
    const modelo = require("../models/docente");
    const docentes = new modelo({
      _id: Types.ObjectId(req.body._id),
      noOficina: req.body.noOficina,
      areaEspecialidad: req.body.areaEspecialidad,
      curp: req.body.curp,
      nombre: req.body.nombre,
      tel: req.body.tel,
      noBancaria: req.body.noBancaria,
      gradoEstudio: req.body.gradoEstudio,
      tutorados: req.body.tutorados,
      tutoriaFirmada: req.body.tutoriaFirmada,
      escuela: Types.ObjectId(req.body.escuela)
    });
    docentes
      .save()
      .then((docentes) => {
        redis.connect().then(() => {
          redis.set(
            `Docentes:POST:${new Date().toUTCString()}`,
            `Registro de docentes ${docentes._id}`
          );
          redis.quit();
        });
        res.header("Access-Control-Allow-Origin", "*").json(docentes);
      })
      .catch((err) => {
        redis.connect().then(() => {
          redis.set(
            `Docentes:POST:${new Date().toUTCString()}`,
            err.message
          );
          redis.quit();
        });
      });
  });
};

const postEscuela = (req, res) => {
  conexion().then(() => {
    const modelo = require("../models/escuelas");
    const escuela = new modelo({
      _id: Types.ObjectId(req.body._id),
      clave: req.body.clave,
      nombre: req.body.nombre,
      cd: req.body.cd,
      direccion: req.body.direccion,
      administrativos: req.body.administrativo,
      docentes: req.body.docentes,
      mantenimiento: req.body.mantenimiento,
      alumnos: req.body.alumnos
    });
    escuela
      .save()
      .then((escuela) => {
        redis.connect().then(() => {
          redis.set(
            `Escuela:POST:${new Date().toUTCString()}`,
            `Registro de escuela ${escuela._id}`
          );
          redis.quit();
        });
        res.header("Access-Control-Allow-Origin", "*").json(escuela);
      })
      .catch((err) => {
        redis.connect().then(() => {
          redis.set(
            `Escuela:POST:${new Date().toUTCString()}`,
            err.message
          );
          redis.quit();
        });
      });
  });
};

const postMantenimiento = (req, res) => {
  conexion().then(() => {
    const modelo = require("../models/mantenimiento");
    const mantenimiento = new modelo({
      _id: Types.ObjectId(req.body._id),
      areaEspecialidad: req.body.areaEspecialidad,
      curp: req.body.curp,
      nombre: req.body.nombre,
      tel: req.body.tel,
      escuela: Types.ObjectId(req.body.escuela),
      noBancaria: req.body.noBancaria
    });
    mantenimiento
      .save()
      .then((mantenimiento) => {
        redis.connect().then(() => {
          redis.set(
            `mantenimiento:POST:${new Date().toUTCString()}`,
            `Registro de mantenimiento ${mantenimiento._id}`
          );
          redis.quit();
        });
        res.header("Access-Control-Allow-Origin", "*").json(mantenimiento);
      })
      .catch((err) => {
        redis.connect().then(() => {
          redis.set(
            `Mantenimiento:POST:${new Date().toUTCString()}`,
            err.message
          );
          redis.quit();
        });
      });
  });
};

module.exports = {
  postAdministrativos,
  postAlumnos,
  postDocentes,
  postEscuela,
  postMantenimiento,
};
