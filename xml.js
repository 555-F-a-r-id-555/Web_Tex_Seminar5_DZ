const xmlText = `<?xml version="1.0" encoding="UTF-8"?>
<user>
	<name>"Иван"</name>
	<surname>"Иванов"</surname>
	<patronymic>"Иванович"</patronymic>
	<age>"30"</age>
	<phone>"+7 926 766 48 48"</phone>
	<birthplace>"Москва"</birthplace>
</user>`;


let parser = new DOMParser();


let xmlDoc = parser.parseFromString(xmlText, "application/xml");

let name = xmlDoc.querySelector("name").textContent;
let surname = xmlDoc.querySelector("surname").textContent;
let patronymic = xmlDoc.querySelector("patronymic").textContent;
let age = xmlDoc.querySelector("age").textContent;
let phone = xmlDoc.querySelector("phone").textContent;
let birthplace = xmlDoc.querySelector("birthplace").textContent;


document.write('<span style="color: black;">xmlDoc.parser -------------------------> <br>')
document.write('<span style="color: red;">Имя: ' + name + '<br>');
document.write('<span style="color: blue;">Фамилие: ' + surname + '<br>');
document.write('<span style="color: green;">Отчество: ' + patronymic + '<br>');
document.write('<span style="color: pink;">Возраст: ' + age + '<br>');
document.write('<span style="color: yellow;">Телефон: ' + phone + '<br>');
document.write('<span style="color: blue;">Место рождения: ' + birthplace + '<br>');
