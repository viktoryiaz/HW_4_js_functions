//  Реализуйте считывание из JSONки из файла HW_4.2.json с помощью, например, модуля fs. 
// для дальнейшего использования в функции, описанной в задании


const fs = require("fs");
const users = JSON.parse(fs.readFileSync("./HW_4.2.json"));

//
let chekid = Array.from(new Set(users.map(item => JSON.stringify(item)))).map(item => JSON.parse(item));
console.log(chekid);
