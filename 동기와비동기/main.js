// 이것이 동기인지 비동기인지 확인해 봅시다. 
//const { add } = require("nodemon/lib/rules")

function add(x) {
    return x+2;
}

function account(a,b, cb){
    setTimeout(() => {
        cb(a+b); // return a + b;
    },2000);
}

// 자바스크립트에서는 void 가 없다 그러면 retun 이없는데 이때는 
const result = add(3); // 언디파인 을 생각하여야 한다.
const temp = result; 

const result2 = account(10,20, (result) => {
    console.log('result : ',result);
});
const temp2 = result2;
console.log('temp2 : ',temp2);
/*
그러면 5번이 실행되기 전에 6번이 실행이 될 수 있다, 없다. 
*/

/*
1. 컴파일(x)
2. 순차적(호이스팅)
jqul 비동기 처리를 지원하는 ajax ApI  (XMLHttpRequest) 이다.
동기코드    :    

비동기코드  :   

setTimeout() 는 나중에 변수의 값을 가져올 수 있는 변수이다.
*/
