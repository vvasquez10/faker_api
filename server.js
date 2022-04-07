const express = require("express");
//import express from "express";
const app = express();
const port = 8000;

const Usuario = require("./classes/Usuario.js");
const Empresa = require("./classes/Empresa.js");

// asegúrate de que las siguientes líneas se encuentren por encima de cualquier bloque de código app.get o app.post
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
    
app.get("/api/users/new", (request, response) => {
    response.json(new Usuario);
});

app.get("/api/companies/new", (request, response) => {
    response.json(new Empresa);
});

app.get("/api/user/company", (request, response) => {
    response.json({
        empresa: new Empresa,
        usuario: new Usuario
    });
});





// esto tiene que estar debajo de los otros bloques de código
app.listen( port, () => console.log(`Listening on port: ${port}`) );