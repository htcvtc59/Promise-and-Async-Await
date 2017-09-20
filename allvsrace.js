let add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') {
                return reject(new Error('Tham so ko pai number'));
            }
            resolve(a + b);
        }, 1000);
    });
}

let multiply = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') {
                return reject(new Error('Tham so ko pai number'));
            }
            resolve(a * b);
        }, 1000);
    });
}
//mang gia tri [ 9, 20 ] cai nao muon trc hien thi trc 

// Promise.all([add(4,5),multiply(4,5)])
// .then(res=>console.log(res))
// .catch(err=>console.log(err+''))


// Promise.race([add(4, 5), multiply(4, 5)])
//     .then(res => console.log(res))
//     .catch(err => console.log(err + ''))


