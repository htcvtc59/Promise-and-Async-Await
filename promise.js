let apromise = new Promise((resolve,reject)=>{
    // resolve('Thanh cong'); //nghia la thanh cong
    setTimeout(()=>{
        // reject(new Error('That bai'));
        resolve('Thanh cong'); 
    },1000);
});
//khi goi dong thoi 2 cai thi resolve dc chap nhan con reject ko dc chap nhan
//xu ly voi resolve ==============
//apromise.then((msg)=>console.log('da thuc thi '+msg);

//xu ly voi reject ================
apromise.then((msg)=>{
    console.log('da thuc thi '+msg);
},(errMsg)=>console.log(errMsg+''));