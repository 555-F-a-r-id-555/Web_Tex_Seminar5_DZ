const jsonText = `{
    "name": "Иван",
    "surname": "Иванов",
    "patronymic": "Иванович",
    "age": "30",
    "birthplace": "Москва",
    "phone": "+7 926 766 48 48"
}`;

let jsonObject = JSON.parse(jsonText);

document.write('<span style="color: black;">Json.parser -------------------------> <br>');
document.write('<span style="color: red;">Имя: ' + jsonObject.name + '</span><br>');
document.write('<span style="color: green;">Фамилия: ' + jsonObject.surname + '</span><br>');
document.write('<span style="color: blue;">Отчество: ' + jsonObject.patronymic + '</span><br>');
document.write('<span style="color: orange;">Возраст: ' + jsonObject.age + '</span><br>');
document.write('<span style="color: purple;">Телефон: ' + jsonObject.phone + '</span><br>');
document.write('<span style="color: brown;">Место рождения: ' + jsonObject.birthplace + '</span><br>');




