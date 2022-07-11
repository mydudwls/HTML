var requestOptions = {
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
fetch(`https://api.hnpwa.com/v0/news/1.json`)
    .then((response) => response.json()) //콜백이고 
    .then((result) => {
        console.log(result);
    const ul = document.createElement("ul");
    for(let i=0;i<result.length;i++){
    const a = document.createElement("a");
    a.setAttribute('href',result[i].url);
    a.setAttribute('target','_balnk');
    const li = document.createElement('li'); 
    li.innerHTML = result[i].title;
    a.appendChild(li);
    ul.appendChild(a);
        } 
        document.getElementById("root").appendChild(ul);

        ul.addEventListener('click',(e)=>{
            console.log(e.target.innerHTML);
            const h1 = document.createElement('h1');
            h1.innerHTML = e.target.innerHTML;
            document.getElementById('root').appendChild(h1);
        })
        // 여기 밑으로 관련 내용이 더욱 추가하여야 글에 링크가 걸려서 클릭을 할 수 있다.
    }) //콜백이다.
    .catch(error => console.log('error', error));


    // 위 내용에 추가된 부분은  const a = document.createElement("a"); 부분을 
    // 추가여 a라는 변수를 선언해 주고 
    // a.setAttribute('href',result[i].url);
    // a.setAttribute('target','_balnk');
    // a변수에 위 두줄의 값을 첨가한 것이다.
    // const li = document.createElement('li'); 
    // li.innerHTML = result[i].title;
    // a.appendChild(li);
    // ul.appendChild(a);
    // li의 값을 a에 넣어주고 
    // ul의 값을 a에 넣어줌으로써 내용을 완성하고 
    // 그밑에  document.getElementById("root").appendChild(ul);
    // ul에 "root" 라는 문자값을 넣어주게 된다.
    // 일단 여기까지만 이해함 ㅠㅠ 그 다음은 모르겠넹!! 내가 따로 복습해야지! ㅜㅠㅠㅠ