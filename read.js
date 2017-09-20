
let fs = require('fs');

// doc file bat dong bo ================
// fs.readFile('./a.txt', 'utf-8', (err, data) => {
//     if(err) return console.log(err);
//     console.log(data);
// });
// console.log('ket thuc');
//ket qua la hien ket thuc roi den hello

// doc file dong bo ===================
let data = fs.readFileSync('./a.txt','utf-8');
console.log(data);
console.log('ket thuc');
//ket qua la hien hello roi den ket thuc
