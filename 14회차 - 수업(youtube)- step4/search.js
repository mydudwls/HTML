function handleEnter(){
  alert(event.keyCode)
  if(event.keyCode === 13){ // 키를 눌렀을 때 - 13번이면 Enter 코드값
    console.log('엔터 쳤을 때')
    searchList();
  }
  }
//  var는 사용하지 않는다 - 호이스팅 발동이 되니까  - ES5 
function searchList(){
const query = document.querySelector('.input').value; // 이부분은 사용자에게 받은 정보값이니 건들면 안된다.
console.log('사용자가 입력한 검색어 : '+query);
const requestOptions = {
  method: 'GET',
  redirect: 'follw'
};

fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=AIzaSyCKgdKNlIQPDCxkyGhGyyJ8Bu_MnSrYDBw&type=video`)
  .then(response => response.json())
// .then(result => console.log(result.items))
.then(result => { 
  const items = result.items;
  const videoList = [];
  videoList.push(`<li class='container'>`);
  for(let i=0;i<items.length;i++){
videoList.push(`<li class='container'>`);
videoList.push(`<div class='video'>`);
videoList.push(`<img class='thumbnail' src='${items[i].snippet.thumbnails.medium.url}' alt='이미지'/>`);
videoList.push(`<div>`);
videoList.push(`<p class='title'>${items[i].snippet.title}</p>`);
videoList.push(`<p class='channel'>${items[i].snippet.channelTitle}</p>`);
videoList.push(`</div>`);
videoList.push(`</div>`);
  }

videoList.push(`</ul>`)
document.querySelector('#root').innerHTML = videoList.join("");
  })  
.catch(error => console.log('error',error));


  /*
const videoList = [];
const items = result.items;// Array
console.log(items.length);//25
videoList.push(`<ul class='videos'>`);
for(let i=0;i<items.length;i++){
}

videoList.push(`</ul>`);
document.querySelector('#root').innerHTML = videoList.join("");
*/
}////////// end of searchList

/*
videoList.push(`<li class='container'>`);
videoList.push(`<div class='video'>`);
videoList.push(`<img class='thumbnail' src='${items[i].snippet.thumbnails.medium.url}' alt='이미지'/>`);
videoList.push(`<div>`);
videoList.push(`<p class='title'>${items[i].snippet.title}</p>`);
videoList.push(`<p class='channel'>${items[i].snippet.channelTitle}</p>`);
videoList.push(`</div>`);
videoList.push(`</div>`);
*/