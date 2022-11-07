const express = require("express")
const router = express.Router()
const get = require("./get")
const post = require("./post")
const put = require("./put")
const deleting = require("./delete")

//GET
router.get("/alumnos", get.getAlumnos)
router.get("/alumnos/:id", get.getAlumno)
router.get("/docentes",get.getDocentes)
router.get("/docentes/:id",get.getDocente)
router.get("/escuelas", get.getEscuelas)
router.get("/escuelas/:id", get.getEscuela)
router.get("/mantenimiento", get.getMantenimiento)
router.get("/mantenimiento/:id", get.getMantenimientoo)
router.get("/administrativos", get.getAdministrativos)
router.get("/administrativos/:id", get.getAdministrativo)

//POST
router.post("/administrativo", post.postAdministrativos)
router.post("/alumno",post.postAlumnos)
router.post("/docente", post.postDocentes)
router.post("/escuela", post.postEscuela)
router.post("/mantenimiento", post.postMantenimiento)

//PUT
router.put("/administrativo/:id", put.putAdministrativo)
router.put("/alumno/:id", put.putAlumno)
router.put("/docente/:id", put.putDocente)
router.put("/escuela/:id", put.putEscuelas)
router.put("/mantenimiento/:id", put.putMantenimiento)

//DELETE
router.delete("/administrativo/:id", deleting.deleteAdministrativo)
router.delete("/alumno/:id", deleting.deleteAlumnos)
router.delete("/docente/:id", deleting.deleteDocente)
router.delete("/escuela/:id", deleting.deleteEscuelas)
router.delete("/mantenimiento/:id", deleting.deleteMantenimiento)

module.exports = router