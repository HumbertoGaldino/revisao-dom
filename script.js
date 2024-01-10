/* 1 - O QUE É A DOM?

É a árvore de elementos DOM, sendo uma cópia fornecida para a linguagem,
no caso JavaScript. Temos então o HTML como elemento pai e suas ramificações os filhos, 
por exemplo o HEAD e o BODY. O HEAD tem as ramificações como o TITLE, que tem um atributo text.

O JavaScript através do objeto document conseguirá manipular o HTML, seus atributos, classes, etc.

*/

const text = document.querySelector('p');

text.innerHTML = 'Olá, mundo'
text.style.color = 'red';