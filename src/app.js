/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];

// Función para generar combinaciones de nombres de dominio
  function generateDomainNames(pronoun, adj, noun) {
    let domainNames = [];

    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          let domainName = `${pronoun[i]}${adj[j]}${noun[k]}.com`;
          domainNames.push(domainName);
        }
      }
    }

    return domainNames;
  }

// Obtener todas las combinaciones de nombres de dominio
let domainNames = generateDomainNames(pronoun, adj, noun);

// Imprimir los nombres de dominio en la consola
domainNames.forEach((domain) => {
  console.log(domain);
});

  console.log("Hello Rigo from the console!");
};
