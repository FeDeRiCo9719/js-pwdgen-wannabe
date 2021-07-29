// 1.Chiedi all’utente il suo nome
var firstname = prompt("Your name");

// 2.poi chiedi il suo cognome
var surname = prompt("Your surname");

// 3.poi chiedi il suo colore preferito
var color = prompt("Your favourite color");

// 4.Crea la password
var password = (firstname + surname + color + "classe 40");

// 5.Infine scrivi sulla pagina nomecognomecolorepreferito40
document.getElementById("password").innerHTML += password;
