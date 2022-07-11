const content = document.createElement('div');
const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
/*
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
<ul>
*/
fetch("https://api.hnpwa.com/v0/news/1.json", requestOptions)
    .then(response => response.json()) //콜백이고 
    .then(result => {
    const ul = document.createElement("ul");
    for(let i=0;i<10;i++){
    const li = document.createElement("li");
    li.innerHTML = result[i].title;
    ul.appendChild(li);
        } 
        document.getElementById("root").appendChild(ul);
    }) //콜백이다.
    .catch(error => console.log('error', error));
