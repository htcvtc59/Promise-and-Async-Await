let square = (a, b, h) => (a + b) * h / 2;
console.log(square(2, 3, 2));

//func bat dong bo su li callback func tra ve tra ve tac vu bat dong bo
// let add = (a, b, cb) => {
//     setTimeout(() => {
//         let err, result;
//         if (typeof a != 'number' || typeof b != 'number') {
//             err = 'Tham so phai co kieu number';

//             return cb(err, result);
//         }
//         result = a + b;
//         cb(err, result);

//     }, 1000);
// }
// hoac viet theo cach 2
let add = (a, b, cb) => {
    setTimeout(() => {
        if (typeof a != 'number' || typeof b != 'number') {
            return cb(new Error('Tham so phai co kieu number'));
        }
        cb(undefined, a + b);

    }, 1000);
}


add(4,5,(err,result)=>{
    if(err) return console.log(err);
    console.log(result);
})