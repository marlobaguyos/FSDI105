var logo = document.getElementById('logo');
var links = document.getElementsByTagName('a');
var btns = document.getElementById('main-1').getElementsByTagName('a');

var a = document.getElementById('navegacion').getElementsByTagName('a');
a[0].setAttribute('href', 'http://www.google.com');
console.log(a);

for(let i=0;i<links.length;i++){
    links[i].setAttribute('target', '_blank');
}

for(let j=0;j<btns.length;j++){
    btns[j].setAttribute('class', 'x');
}

var li = document.querySelector('#navegacion nav ul li');

var lis = document.querySelectorAll('#navegacion nav ul li');

console.log(li);
console.log(lis);

var newElement = document.createElement('ul');
var newLi = document.createElement("li");
var newText = document.createTextNode("Google");
var main = document.getElementById('main-1')
newLi.appendChild(newText);
newElement.appendChild(newLi);


console.log(newElement);