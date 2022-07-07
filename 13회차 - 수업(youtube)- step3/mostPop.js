const ajax = new XMLHttpRequest();
const MOST_URL_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=키보드&key=AIzaSyCKgdKNlIQPDCxkyGhGyyJ8Bu_MnSrYDBw&type=video`;
ajax.open("GET", MOST_URL, false);
ajax.send(); // 지연이 발생할 수 있다.

//console.Log(ajax.response);
const videoList = [];
console.log(ajax.response);
const result = JSON.parse(ajax.response);// { ... items:[{snippet:...}]}
const items = result.items;// Array
console.log(items.length);//25
videoList.push(`<ul class='videos'>`);
for(let i=0;i<items.length;i++){
content +=`<li class='container'>`
content +=`<div class='video'>`
content +=`<img class='thumbnail' src='${items[i].snippet.thumbnails.medium.url}' alt='이미지'/>`;
content +=`<div>`;
content +=`<p class='title'>${items[i].snippet.title}</p>`;
content +=`<p class='channel'>${items[i].snippet.channelTitle}</p>`;
content +=`</div>`;
content +=`</div>`;
}
content += `</ul>`;
document.querySelector('#root').innerHTML = content;
////////// end of searchList


