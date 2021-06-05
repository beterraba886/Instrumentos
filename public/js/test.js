var url_string = window.location.href;
var url = new URL(url_string);
let tipo = url.searchParams.get("tipo");
let conteudo_pagina = "";
console.log('teste: ' + tipo);