
let main = document.querySelector('#main');
main.remove();

let newHeader = document.createElement('h1');


newHeader.setAttribute("id","victory");
let neweader = document.getElementById('victory')
newHeader.innerHTML = 'stanley is the champion';
document.body.append(newHeader);