const name = document.querySelector('#name');
const url = document.querySelector('#url');
const textarea = document.querySelector('#textarea');
const btn = document.querySelector ('#btn');
const wrap = document.querySelector('#wrap');

btn.addEventListener('click', ()=>{
    changeName ();
    addAvatar ();
    checkSpam ();
})

function changeName (){
    let user = document.createElement('p');
    user = name.value;
    let cleanUser = user.trim(user);
    user = cleanUser.toLowerCase();
    user = user[0].toUpperCase() + user.slice(1);
    wrap.prepend(user);
    name.value = ''
}

function addAvatar (){
    const avatar = document.createElement('img');
    avatar.src = url.value;
    avatar.classList.add('img');
    wrap.prepend(avatar);
    url.value = '';    
}

function checkSpam (){
    const str = textarea.value;
    let newStr = document.createElement('div');   
    newStr.innerText =  str.replace(/viagra/gi, '***').replace(/XXX/gi, '***');
    wrap.append(newStr);
    textarea.value = ''
}


///задание со *

function deleteTags(str) {
    const stringWithTags = str;
    const stringWithoutTags = stringWithTags.replace(/(<([^>]+)>)/gi, '');
    console.log(stringWithoutTags);
}

deleteTags('<p>Hello, <b>world</b>!</p>');








