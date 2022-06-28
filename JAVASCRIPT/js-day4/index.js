const ajax = new XMLHttpRequest();
const new_URL = 'https://github.com/HackerNews/API'

ajax.open('GET', NEWS_URL, false)// true:동직적처리, false: 비동기처리
ajax.send();
//console.log(ajax.response);
const newsFeed = JSON.parse(ajax.response);
for(let i = 0; i < 10; i++) {
    console.log(newFeed[i].title);
}

// 변수를 선언시 var를 사용하지 않는다 let, const
// 웹서비스시 비동기적 처리위해서 제공하는 객체 
// 해커뉴스에서 제공하는 뉴스 정보 수집 
// open함수는 XMLHttpRequest에서 제공하는 함수 
// 1.GET or 2. URL  - 데이텃셋, 3 false일반적 
// console.log(ajax.response);
// URL로 해커뉴스 서버에 요청을 했을 때 응답값을 받아올 수 있다.
console.log(ajax.resopnse)