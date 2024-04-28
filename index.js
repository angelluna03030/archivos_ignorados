//ANGEL L. estuvo aqui :D
// 🐯 🐯 🐯
//
//process:es una variable gloval de
//javascript.
//                                     .env: nombre del archivo donde se 
//                                     encuentran las variables.   
//              
//                                                                        el nombre de las variables que 
//                                                                        esten en .env
//todo -->   process.                          env                        . HOTS
//           ^^^^^^^                            ^^^ 
require('dotenv').config();
console.log(
    process.env.PORT
)
console.log(
    process.env.INFO_SENCIBLE
)

console.log(
    process.env.DB_PASSWORD
)


//todo --> ADVERTENCIA: si ya agrego algo al reposicitorio en GitHub, con el comando "git add *"
//todo --> ya no lo podra quitar.
//todo --> recomendacion en vez de utlizar "git add *" que agrega todo, 
//todo --> utlizar mejor "git add ." 




//todo --> otras recomendaciones con .gitignore para agregar una carpeta 
//todo --> primero se le coloca el "/" y al luego la carpeta, Ej : "/node_modules"
//todo --> y si es un archivo el nombre del archivo y la extención del
//todo --> archivo, Ej: "index.js, index.html, ". 