 /*let ename ="scott"; //전역 스코프
// 자바스크립트에서는 함수 내부에 또 다른 함수가 올 수 있다.
// 함수 선언 방법 2가지가 있다. 
// 함수 문 : 
// 함수 식 : 
function methodA(){
    let i = 5;
    console.log(ename);
    console.log(i) // 함수스코프
insertMethod(); // 호이스팅 
// 함수문   
    function innerMethod(){
        let j = 10;
        console.log(i);
    }
// insert here - after
// methodB();
methodB(); 
// 함수식일때 befor
// 함수식 
    const method = function(){
    console.log('methodB');
    }
    //  함수식일때 after
    methodB();

}
methodA();
console.log(i); // 시스템이 정지된 것이다. 외부에서 호출 안됨 

*/


/*
스코프의 종류 
1. 글로벌 스코프 : 자바에서는 member variable, glovble varriable 전변
애플리케이션이 실행되면 즉시 만들어지고 종료되면 사라진다.    
2. 함수 스코프 : 함수안에서 정의된다, main.ival , sub,ival 지변 
함수가 만들어졌다고 해서 스코프가 생긴다. 
3. 블록 스코프 : 자바에 포문 :for(int i; != i)  
init() -> service -> destroy() = 자바에서는 candidate (자원 반납에 대해서도 공부할 것)
즉 스코프는 라이프 사이클에 똑같다고 할 수 있다.
*/

// 동기 코드와 비동기 코드에 대한 정리!
// 또한 호이스팅 그다음 콜백 함수에 대한 내용이다. 
function account(a,b){
    setTimeout(() => {
    return a + b;
},2000);
}
const result = add(3);
const temp = result;

const result2 = add(10,20);
const temp2 = result2;