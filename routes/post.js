const conectores = require("./conexion");
const conexion = conectores.mongo;
const redis = conectores.redis();
const { Types } = require("mongoose");

const postAdministrativos = (req, res) => {
  conexion().then(() => {
    const modelo = require("../models/administrativos");
    const administrativo = new modelo({
      _id: Types.ObjectId(req.body._id),
      mail: req.body.mail,
      noBancaria: req.body.noBancaria,
      curp: req.body.curp,
      escuela: Types.ObjectId(req.body.escuela),
      extTel: req.body.extTel,
      funcion: req.body.funcion,
      hrEntrada: req.body.hrEntrada,
      hrSalida: req.body.hrSalida,
      nombre: req.body.nombre,
      tel: req.body.tel,
    });
    administrativo
      .save()
      .then((administrativo) => {
        redis.connect().then(() => {
          redis.set(
            `ADMINISTRATIVOS:POST:${new Date().getTime().toString()}`,
            `Registro de administrativo ${administrativo._id}`
          );
          redis.quit();
        });
        res.header("Access-Control-Allow-Origin", "*").json(administrativo);
      })
      .catch((err) => {
        redis.connect().then(() => {
          redis.set(
            `ADMINISTRATIVOS:POST:${new Date().getTime().toString()}`,
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
      areaEspecialidad: req.body.areaEspecialidad,
      creditoTutoria_Firmada: req.body.creditoTutoria_Firmada,
      curp: req.body.curp,
      escuela: Types.ObjectId(req.body.escuela),
      fechaIncripcion: req.body.fechaIncripcion,
      fechaNac: req.body.fechaIncripcion,
      gradoAcademico: req.body.gradoAcademico,
      noBancaria: req.body.noBancaria,
      noOficina: req.body.noOficina,
      nombre: req.body.nombre,
      tel: req.body.tel,
      tutor: Types.ObjectId(req.body.tutor),
    });
    alumnos
      .save()
      .then((alumnos) => {
        redis.connect().then(() => {
          redis.set(
            `Alumnos:POST:${new Date().getTime().toString()}`,
            `Registro de alumnos ${alumnos._id}`
          );
          redis.quit();
        });
        res.header("Access-Control-Allow-Origin", "*").json(alumnos);
      })
      .catch((err) => {
        redis.connect().then(() => {
          redis.set(
            `alumnos:POST:${new Date().getTime().toString()}`,
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
      areaEspecialidad: req.body.areaEspecialidad,
      curp: req.body.curp,
      noBancaria: req.body.noBancaria,
      noTelIns: req.body.noTelIns,
      nombre: req.body.nombre,
      tel: req.body.tel,
    });
    docentes
      .save()
      .then((docentes) => {
        redis.connect().then(() => {
          redis.set(
            `Docentes:POST:${new Date().getTime().toString()}`,
            `Registro de docentes ${docentes._id}`
          );
          redis.quit();
        });
        res.header("Access-Control-Allow-Origin", "*").json(docentes);
      })
      .catch((err) => {
        redis.connect().then(() => {
          redis.set(
            `Docentes:POST:${new Date().getTime().toString()}`,
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
      cd: req.body.cd,
      clave: req.body.clave,
      direccion: req.body.direccion,
      nombre: req.body.nombre,
    });
    escuela
      .save()
      .then((escuela) => {
        redis.connect().then(() => {
          redis.set(
            `Escuela:POST:${new Date().getTime().toString()}`,
            `Registro de escuela ${escuela._id}`
          );
          redis.quit();
        });
        res.header("Access-Control-Allow-Origin", "*").json(escuela);
      })
      .catch((err) => {
        redis.connect().then(() => {
          redis.set(
            `Escuela:POST:${new Date().getTime().toString()}`,
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
      escuela: Types.ObjectId(req.body.escuela),
      noBancaria: req.body.noBancaria,
      noTelIns: req.body.noTelIns,
      nombre: req.body.nombre,
      tel: req.body.tel,
    });
    mantenimiento
      .save()
      .then((mantenimiento) => {
        redis.connect().then(() => {
          redis.set(
            `mantenimiento:POST:${new Date().getTime().toString()}`,
            `Registro de mantenimiento ${mantenimiento._id}`
          );
          redis.quit();
        });
        res.header("Access-Control-Allow-Origin", "*").json(mantenimiento);
      })
      .catch((err) => {
        redis.connect().then(() => {
          redis.set(
            `Mantenimiento:POST:${new Date().getTime().toString()}`,
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
