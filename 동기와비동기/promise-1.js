const p = new Promise((resolve, reject) => {
    //resolve('ok');
    setTimeout(() => {
        resolve('ok');
    },2000);
    // reject('Fail');
});
p.then((ok) => {
    console.log('첫번째 성공');
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
        console.log('두번째 성공');
        },3000);
    })
}). then(function (ok){
    console.log(ok);
})
.catch((error) => {
    console.log(error);
})
// 요번 코드 작성하면서 리와인드 시켜줄테니 파라미스에 대한 기본 꼴에 대해서 알려준 것이다.