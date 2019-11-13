//Algunos tipos de datos
var nombre = "Peter";
var numero = 1234;
var booleano = true;
var hoy = new Date();
var spiderman = {
    nombre: "Peter",
    edad: 20
};
//Templates literales de ES6
var apellido = "Jonas";
var edad = 25;
var texto = "Hola, " + nombre + " " + apellido + " (" + edad + ")";
var texto2 = "" + (89 + 36);
//Parámetro opcional: momento?:string
//Parámetro obligatorio: quien:string
//Parámetro por defecto: objeto:string="batiseñal"
function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "batiseñal"; }
    var mensaje = quien + " activ\u00F3 la " + objeto;
    console.log(mensaje);
}
//activar("Gordon")
//Funciones flecha
var miFuncion = function (a) {
    return a;
};
var miFuncionFlecha = function (a) { return a; };
var miFuncion2 = function (a, b) {
    return a + b;
};
var miFuncionFlecha2 = function (a, b) { return a + b; };
var miFuncionFlecha3 = function (a, b) {
    var suma = a + b;
    return suma;
};
var hulk = {
    nombre: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " Smash!!"); }, 2000);
    }
};
//hulk.smash()
//Destructuración
//de objetos
var avenger = {
    nombreA: 'Steve',
    clave: 'Capitan America',
    poder: 'Droga'
};
var nombreA = avenger.nombreA, clave = avenger.clave, poder = avenger.poder;
// de arreglos
var avengers = ["Thor", "Steve", "Tony"];
var thor = avengers[0], capy = avengers[1], ironman = avengers[2];
var wolverine = {
    nombre: "Wolverine",
    poder: "Garras"
};
var enviarMision = function (xmen) {
    console.log("Enviado a: " + xmen.nombre);
};
enviarMision(wolverine);
//Clases
