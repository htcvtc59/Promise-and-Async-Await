//let a = await apromise

let addPr = (a, b) => {
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

// let add = async () => {
//     let res = await addPr(4, 5);
//     console.log(res);
// }
// add();



// await liên tiếp

// let tinhdientich = async (a,b,h,cb)=>{
//     try {
        
//         let ab = await addPr(4,5);
//         let abh = await multiply(ab,h);
//         let square = await divide(abh,2);
//         cb(undefined,square);
        

//     } catch (error) {
//         cb(error);
//     }
   
// }

// tinhdientich(4,5,6,(err,data)=>{
//     if(err) return console.log(err+'');
//     console.log(data);
// });

// Async function trả về promise


let tinhdientich = async (a,b,h)=>{
    try {
        
        let ab = await addPr(4,5);
        let abh = await multiply(ab,h);
        let square = await divide(abh,2);
        
        return Promise.resolve(square);

    } catch (error) {
        return Promise.reject(error);
    }
   
}

tinhdientich(4,5,'6')
.then(res=>console.log(res))
.catch(err=>console.log(err+''));