// let mang = [4,3,4,5];
// mang.forEach(function(e){
//     console.log(e);
// });

// arrowfunction se viet nhu duoi

// let mang = [4,3,4,5];
// mang.forEach(e=>console.log(e));

// neu co nhieu phan tu va nhieu tham so thi them ngoac vao e va console.log arrowfunction se duoc viet nhu sau

// let mang = [4,3,4,5];
// mang.forEach((e)=>{console.log(e)});

// =============
// let mang = [4,3,4,5];
// var mang2 = mang.map(function(e){
//     return e*2;
// });
// console.log(mang2);
// ket qua [ 8, 6, 8, 10 ]

// ===============
// viet theo kieu arrowfunction
// let mang = [4,3,4,5];
// var mang2 = mang.map(e=> e*2 );
// console.log(mang2);

// arrowfunction
let getFunc = (number) => {
    if (number >= 0) return () => console.log('so duong');
    return () => console.log('so am');
}
getFunc(1)(); 
// ket qua so duong


