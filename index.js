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
