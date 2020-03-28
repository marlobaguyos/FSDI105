var logo = document.getElementById('logo');
var links = document.getElementsByTagName('a');
var btns = document.getElementsById('main-1').getElementsByTagName('a');

var a = document.getElementById('menu').getElementsByTagName('a');
a[0].setAttribute('href', 'http://www.google.com');
console.log(a);

for(let i=0;i<links.length;i++){
    links[i].setAttribute('target', '_blank');
}

for(let j=0;j<btns.length;j++){
    btns[j].setAttribute('class', 'x');
}

var footer = document.querySelector()