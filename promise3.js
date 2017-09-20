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

let divide = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') {
                return reject(new Error('Tham so ko pai number'));
            }
            resolve(a / b);
        }, 1000);
    });
}

let tinhdientich = (a, b, h) => {
  return  add(a, b)
        .then(res => multiply(res, h))
        .then(result => divide(result, 2))
}
tinhdientich(6,4,5)
.then(square => console.log(square))
.catch(err => console.log(err + ''))


// add(4, 5).then(res => add(res, 6))
//     .then(res => console.log(res)).catch(err=>console.log(err+''))