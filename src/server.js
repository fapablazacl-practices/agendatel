
var Contact = function(name, surname, address, mail, phone) {
    this.name = name;
    this.surname = surname;
    this.address = address;
    this.mail = mail;
    this.phone = phone;
};

var contacts = [
    new Contact("Felipe", "Apablaza", "Angamos 339", "ing.apablaza@gmail.com", "72555408"),
    new Contact("Barbara", "Arbulu", "Angamos 339", "barbara.arbulu@gmail.com", "90529922"),
    new Contact("Laura", "Apablaza", "Angamos 339", "laura.apablaza@gmail.com", "")
];

// modules
var express = require("express");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
var multer = require("multer");

app.use(express.static("public"));
app.use("/", express.static(__dirname));
app.use(bodyParser.urlencoded({extended:false}));

var upload = multer({desc:"/tmp"});

function generateContactsHTML() {
    var html = "";

    html += "<table>";

    html += "<tr><td>Nombres</td><td>Apellidos</td><td>Direccion</td><td>Correo</td><td>Telefono</td><td>Acciones</td></tr>";

    for (var i=0; i<contacts.length; i++) {
        var contact = contacts[i];

        html += "<tr>";

        html += "<td>" + contact.name + "</td>";
        html += "<td>" + contact.surname + "</td>";
        html += "<td>" + contact.address + "</td>";
        html += "<td>" + contact.mail + "</td>";
        html += "<td>" + contact.phone + "</td>";

        html += "</tr>";
    }

    html += "</table>";

    return html;
}

/**
 * Muestra la pagina principal
 */
function handleIndex(request, response) {
    // ${contacts}

    fs.readFile(__dirname + "/index.htm", function(err, content){
        response.end(content.toString().replace("${contacts}", generateContactsHTML()));
    });
}

/**
 * Muestra la pagina para agregar un nuevo contacto
 */
function handleAddContactHtm(request, response) {
    response.sendFile(__dirname + "/add_contact.htm");
}

/**
 * Agrega un nuevo contacto a la lista de contactos 
 */
function handleAddContact(request, response) {
    var contact = new Contact();
    var source = request.query;

    contact.name = source.nombres;
    contact.surname = source.apellidos;
    contact.address = source.direccion;
    contact.mail = source.correo;
    contact.phone = source.telefono;

    contacts.push(contact);

    return handleAddContactHtm(request, response);
}

// manejar las distintas acciones del servidor
app.get("/", handleIndex);
app.get("/index", handleIndex);
app.get("/add_contact.htm", handleAddContactHtm);
app.get("/add_contact", handleAddContact);

// levantar el servidor
var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;
    
    console.log("Listening on port 80...");
});
