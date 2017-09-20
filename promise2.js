// let add = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof a != 'number' || typeof b != 'number') {
//                 return reject(new Error('Tham so ko pai number'));
//             }
//             resolve(a + b);
//         }, 1000);
//     });
// }

// add(4, 5).then((res) => { console.log(res); }, (err) => console.log(err + ''));

// Doc file voi proimse
let fs = require('fs');
// fs.readFile('./a.txt','utf8',(err,data)=>{
//     if(err) return console.log(err+'');
//     console.log(data);
// });

let promiseRead = new Promise((resolve, reject) => {
    fs.readFile('./a.txt', 'utf8', (err, data) => {
        if (err) return reject(err + '');
        resolve(data);
    });
});

// promiseRead.then(data=>console.log(data),(err)=>console.log(err+''));


// tai su dung func promise

let read = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
}


read('./b.txt').then(res=>console.log(res),err=>console.log(err+''))
