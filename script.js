/* 

1 - O QUE É A DOM?

É a árvore de elementos DOM, sendo uma cópia fornecida para a linguagem,
no caso JavaScript. Temos então o HTML como elemento pai e suas ramificações os filhos, 
por exemplo o HEAD e o BODY. O HEAD tem as ramificações como o TITLE, que tem um atributo text.

O JavaScript através do objeto document conseguirá manipular o HTML, seus atributos, classes, etc.

*/

// const text = document.querySelector("p");

// text.innerHTML = "Olá, mundo";
// text.style.color = "red";

/*

2 - OBJETO CONSOLE

O objeto é executado no Debug do navegador. Através dele conseguimos usar o
console do navegador para debugar, para ver código, etc.

*/

// console.log("Olá, mundo!");
// console.error("Olá, eu sou um erro!");
// console.warn("Olá, eu sou um aviso!");

/*

3 - alert(); prompt(); confirm()

Utilizadas para interação com o usuário, caixas de pergunta, confirmação.

*/

// alert("Isso é um aviso!");

// const nome = prompt("Digite o seu nome: ");

// alert(`O seu nome é ${nome}`);

// const status = confirm(
//   "Deseja realmente deletar este item? Está ação não poderá ser desfeita."
// );

// if (status) {
//   alert("Item deletado!");
// } else {
//   alert("Ação cancelada!");
// }

/* 
4 - getElementById(); getElementsByClassName()
*/

// const div = document.getElementById("container");
// const title = document.getElementsByClassName("title");

// console.log({ div });
// console.log({ title });

/* 

5 - getElementByName(); getElementsByTagName();

*/

// const text = document.getElementsByName("text");

// console.log(text[0].textContent);

// const span = document.getElementsByTagName("span");

// console.log(span[0]);

// span[0].innerHTML = "Olá, mundo!";

/*

6 - querySelector(); querySelectorAll();

*/

// const element = document.querySelector(".text");
// const elements = document.querySelectorAll(".text");

// console.log(elements);

/*

7 - InnerHTML

*/

const element = document.getElementById("text2");

element.innerHTML = "Texto alterado pelo JavaScript!";
