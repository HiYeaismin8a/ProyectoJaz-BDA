# **JAZMIN OCHOA BENITEZ**
# Gestión Escolar - BDA
# RUTAS


### GET
1. localhost:3000/escuelas
2. localhost:3000/alumnos
3. localhost:3000/docentes
4. localhost:3000/mantenimiento
5. localhost:3000/administrativos
### POST - Estructura De Doc
``` json
Docente:
    {
        "_id":"Un número o 24 caracteres",
        "noOficina": "String",
        "curp": "String",
        "nombre": "String",
        "tel": "String",
        "noBancaria":"String",
        "gradoEstudio": "String",
        "tutorados": [
            "Un número o 24 caracteres",
            "Un número o 24 caracteres"
        ],
        "escuela":"Un número o 24 caracteres"
    }
```

```json
Administrativo:
{
    "_id": "Un número o 24 caracteres",
    "funcion": "String",
    "hrEntrada": "String",
    "hrSalida": "String",
    "extTel": "String",
    "mail": "String",
    "curp": "String",
    "nombre": "String",
    "tel": "String",
    "noBancaria": "String",
    "escuela": "Un número o 24 caracteres"
}
```
Alumno
```json
    {
        "_id":
        "curp": "2DAOOBJ990323MNTCNZ04",
        "nombre": "String",
        "fechaNac":"String",
        "fechaIncripcion":"String",
        "gradoAcademico": "String",
        "creditoTutoria_Firmada": "Boolean",
        "tutor": "Un número o 24 caracteres",
        "escuela": "Un número o 24 caracteres"
    }
 ```
 Escuela
 ```json
 {
        "_id": "Un número o 24 caracteres",
        "clave": "String",
        "nombre": "String",
        "cd": "String",
        "direccion": "String",
        "administrativos": [
           "Un número o 24 caracteres",
            "Un número o 24 caracteres"
        ],
        "docentes": [
          "Un número o 24 caracteres",
          "Un número o 24 caracteres"
        ],
        "mantenimiento": [
            "Un número o 24 caracteres",
            "Un número o 24 caracteres"
        ],
        "alumnos": [
            "Un número o 24 caracteres",
           "Un número o 24 caracteres",
        ]
    }
 ```
 Mantenimiento
 ```json
     {
        "_id": "Un número o 24 caracteres",
        "noTelIns": "String",
        "areaEspecialidad": "String",
        "curp": "String",
        "nombre": "String",
        "tel":"String",
        "noBancaria": "String",
        "escuela": "Un número o 24 caracteres",
    }
 ```

### PUT
Administrativos
  ```json
  {
    "funcion": "String",
    "hrEntrada": "String",
    "hrSalida": "String",
    "extTel": "String",
    "mail": "String",
    "curp": "String",
    "nombre": "String",
    "tel": "String",
    "noBancaria": "String",
    "escuela": "Un número o 24 caracteres",
}
 ```
Alumnos
   ```json
    {
        "curp": "String",
        "nombre": "String",
        "fechaNac": "String",
        "fechaIncripcion": "String",
        "gradoAcademico":"String",
        "creditoTutoria_Firmada": "Boolean",
        "tutor": "Un número o 24 caracteres",
        "escuela": "Un número o 24 caracteres",
    }
 ```
 Docente
   ```json
     {
        "noOficina": "String",
        "curp":"String",
        "nombre": "String",
        "tel": "String",
        "noBancaria": "String",
        "gradoEstudio": "String",
        "tutorados": [
            "Un número o 24 caracteres",
            "Un número o 24 caracteres",
        ],
        "escuela": "Un número o 24 caracteres",
        "__v": 0
    }
 ```

 Escuela
   ```json
   {
        "clave": "String",
        "nombre": "String",
        "cd": "String",
        "direccion": "String",
        "administrativos": [
            "Un número o 24 caracteres",
            "Un número o 24 caracteres",
        ],
        "docentes": [
            "Un número o 24 caracteres",
            "Un número o 24 caracteres",
        ],
        "mantenimiento": [
            "Un número o 24 caracteres",
           "Un número o 24 caracteres",
        ],
        "alumnos": [
            "Un número o 24 caracteres",
            "Un número o 24 caracteres",
        ]
    }
 ```
 Mantenimiento
   ```json
       {
        "noTelIns": "String",
        "areaEspecialidad": "String",
        "curp": "String",
        "nombre": "String",
        "tel": "String",
        "noBancaria": "String",
        "escuela": "Un número o 24 caracteres"
    }
 ```
### DELETE
Después de la última /
colocar el _id:"" en específico
que se puede obtener ejecuntando los GET
000000028c6d04641ccba221

  ```
  Administrativos
localhost:3000/alumno/000000028c6d04641ccba221
 ```
   ```
   Alumnos
   localhost:3000/alumno/000000028c6d04641ccba221
 ```
   ```
    Docente
   localhost:3000/docente/000000078c6d04641ccba216
 ```
   ```
   Escuela
   localhost:3000/escuela/000000048c6d04641ccba226
 ```

   ```
   Escuela
   localhost:3000/escuela/000000048c6d04641ccba226
 ```


