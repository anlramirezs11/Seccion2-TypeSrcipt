//Algunos tipos de datos
let nombre:string="Peter"
let numero:number=1234
let booleano:boolean=true
let hoy:Date = new Date()
let spiderman={
    nombre:"Peter",
    edad:20
}


//Templates literales de ES6
let apellido:string="Jonas"
let edad:number=25
let texto= `Hola, ${ nombre} ${apellido} (${edad})`
let texto2=`${89+36}`


//Parámetro opcional: momento?:string
//Parámetro obligatorio: quien:string
//Parámetro por defecto: objeto:string="batiseñal"
function activar (quien:string, objeto:string="batiseñal", momento?:string){
    let mensaje:string =`${quien} activó la ${objeto}`
    console.log(mensaje)
}
//activar("Gordon")


//Funciones flecha
let miFuncion = function( a:string ){
    return a
}

let miFuncionFlecha = (a:string) =>a

let miFuncion2 = function(a:number, b:number){
    return a+b;
}

let miFuncionFlecha2 = (a:number, b:number) =>a+b

let miFuncionFlecha3 = (a:number, b:number) =>{
    let suma= a+b
    return suma
}

let hulk={
    nombre:"Hulk",
    smash(){
        setTimeout(()=>console.log(this.nombre + " Smash!!"), 2000);
    }
}

//hulk.smash()

//Destructuración
//de objetos
let avenger={
    nombreA:'Steve',
    clave:'Capitan America',
    poder:'Droga'
}
let { nombreA, clave, poder}= avenger

// de arreglos
let avengers:string[]=["Thor", "Steve", "Tony"];
let [thor, capy, ironman]=avengers;
//let [ , , ironman]=avengers;
//console.log(thor, capy, ironman)

//Promesas
/*let promesa1= new Promise(
    function(resolve, reject){
        setTimeout(()=>{
            console.log("Promesa terminada")
            //Termina bien
           // resolve()
            //Termina mal
            reject()
        }, 1500 )
    }
)

promesa1.then(function(){
    console.log("Ejecutarme cunado se termine bien!")
},
    function(){
        console.error("Ejecutarme cuando haya error")
    }
)*/


//Interfaces de TypeSript
interface Xmen{
    nombre:string,
    poder:string
}

let wolverine:Xmen={
    nombre:"Wolverine",
    poder:"Garras"
}

let enviarMision = (xmen: Xmen) =>{
    console.log("Enviado a: "+xmen.nombre)
}

enviarMision(wolverine)

//Clases
class Avenger{
    nombre: string
    equipo:string
    nombreReal:string
    puedePelear;boolean
    peleasGanadas: number
    constructor(nombre:string, equipo:string, nombreReal:string){
        this.nombre=nombre
        this.equipo=equipo
        this.nombreReal=nombreReal
    }
}
let antman: Avenger = new Avenger("Antman","Cap","Scott Lang");

//Constructores

