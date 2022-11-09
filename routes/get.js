const conectores = require("./conexion");
const conexion = conectores.mongo;
const redis = conectores.redis();
const { Types } = require("mongoose");

const getAdministrativos = (req, res) => {
  conexion().then(() => {
    const administrativos = require("../models/administrativos");
    administrativos
      .find()
      .then((dataAdminist) => {
        redis.connect().then(() => {
          redis.set(
            `ADMINISTRATIVOS:GET:${new Date().toUTCString()}`,
            `consulta de administrativos`
          );
          redis.quit();
        });
        res.header("Access-Control-Allow-Origin", "*").json(dataAdminist);
      })

      .catch((error) => {
        console.log(error);
      });
  });
};

const getAdministrativo = (req, res) => {
  conexion().then(() => {
    const administrativos = require("../models/administrativos");
    administrativos
      .findById(req.params.id)
      .then((dataAdminist) => {
        redis.connect().then(() => {
          redis.set(
            `ADMINISTRATIVOS:GET:${new Date().toUTCString()}`,
            `Obtener de administrativos ${req.params.id}`
          );
          redis.quit();
        });
        res.header("Access-Control-Allow-Origin", "*").json(dataAdminist);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

const getAlumnos = (req, res) => {
  conexion().then(() => {
    const alumnos = require("../models/alumnos");
    alumnos
      .find()
      .then((dataAlumns) => {
        redis.connect().then(() => {
          redis.set(
            `Alumnos:GET:${new Date().toUTCString()}`,
            `consulta de alumnos`
          );
          redis.quit();
        });
        res.header("Access-Control-Allow-Origin", "*").json(dataAlumns);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

const getAlumno = (req, res) => {
  conexion().then(() => {
    const alumnos = require("../models/alumnos");
    alumnos
      .findById(req.params.id)
      .then((dataAlumns) => {
        redis.connect().then(() => {
          redis.set(
            `Alumnos:GET:${new Date().toUTCString()}`,
            `Obtener de alumnos ${req.params.id}`
          );
          redis.quit();
        });
        res.header("Access-Control-Allow-Origin", "*").json(dataAlumns);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

const getDocentes = (req, res) => {
  conexion().then(() => {
    const docentes = require("../models/docente");
    docentes
      .find()
      .then((dataDocents) => {
        redis.connect().then(() => {
          redis.set(
            `Docentes:GET:${new Date().toUTCString()}`,
            `consulta de docentes`
          );
          redis.quit();
        });
        res.header("Access-Control-Allow-Origin", "*").json(dataDocents);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};
const getDocente = (req, res) => {
  conexion().then(() => {
    const docentes = require("../models/docente");
    docentes
      .findById(req.params.id)
      .then((dataDocents) => {
        redis.connect().then(() => {
          redis.set(
            `Docentes:GET:${new Date().toUTCString()}`,
            `OBTENER de docentes ${req.params.id}`
          );
          redis.quit();
        });
        res.header("Access-Control-Allow-Origin", "*").json(dataDocents);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

const getEscuelas = (req, res) => {
  conexion().then(() => {
    const escuelas = require("../models/escuelas");
    escuelas
      .find()
      .then((dataEscuelas) => {
        redis.connect().then(() => {
          redis.set(
            `Escuela:GET:${new Date().toUTCString()}`,
            `consulta de escuelas`
          );
          redis.quit();
        });
        res.header("Access-Control-Allow-Origin", "*").json(dataEscuelas);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};
const getEscuela = (req, res) => {
  conexion().then(() => {
    const escuelas = require("../models/escuelas");
    escuelas
      .findById(req.params.id)
      .then((dataEscuelas) => {
        redis.connect().then(() => {
          redis.set(
            `Escuela:GET:${new Date().toUTCString()}`,
            `OBTENER de escuela ${req.params.id}`
          );
          redis.quit();
        });
        res.header("Access-Control-Allow-Origin", "*").json(dataEscuelas);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

const getMantenimiento = (req, res) => {
  conexion().then(() => {
    const mantenimiento = require("../models/mantenimiento");
    mantenimiento
      .find()
      .then((dataMantenimiento) => {
        redis.connect().then(() => {
          redis.set(
            `mantenimiento:GET:${new Date().toUTCString()}`,
            `consulta de mantenimientos`
          );
          redis.quit();
        });
        res.header("Access-Control-Allow-Origin", "*").json(dataMantenimiento);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};
const getMantenimientoo = (req, res) => {
  conexion().then(() => {
    const mantenimiento = require("../models/mantenimiento");
    mantenimiento
      .findById(req.params.id)
      .then((dataMantenimiento) => {
        redis.connect().then(() => {
          redis.set(
            `mantenimiento:GET:${new Date().toUTCString()}`,
            `Registro de mantenimiento ${req.params.id}`
          );
          redis.quit();
        });
        res.header("Access-Control-Allow-Origin", "*").json(dataMantenimiento);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

module.exports = {
  getAlumnos,
  getAlumno,
  getDocentes,
  getDocente,
  getAdministrativos,
  getAdministrativo,
  getEscuelas,
  getEscuela,
  getMantenimiento,
  getMantenimientoo,
};
