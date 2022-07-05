const ajax = new XMLHttpRequest();
const MOST_URL = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=키보&key=AIzaSyCKgdKNlIQPDCxkyGhGyyJ8Bu_MnSrYDBw&type=video"
ajax.open("GET", MOST_URL, false);
ajax.send();

console.log(ajax.response);