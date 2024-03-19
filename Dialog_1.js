var person = {
    "SNILS 1": ["Рыбаков","Александр","Сергеевич", 18, "июня", 2000, "м","исполнено"],
    "SNILS 2": ["Дудков","Павел","Анатольевич", 24, "августа", 1956, "м","медотвод"],
    "SNILS 3": ["Кепша","Татьяна","Владимировна", 11, "октября", 1978, "ж","назначено"],  
};
console.log(person);

let SNILS;
var FirstFunction = function (person, SNILS) {
 SNILS=prompt("Введите SNILS пациента", SNILS);
 infoname=person[SNILS];
 //console.log(infoname);
 alert("Информация о пациенте "+infoname);
 statusPriv = person[SNILS][7];
 console.log(statusPriv);
};

 //Извлекаем информацию о текущем статусе прививки
 var SecondFunction = function (statusPriv, infoname) {

 //statusPriv = person[SNILS][7];

 //Проверяем возможность изменения статуса
 if (statusPriv === "исполнено") {
    alert("Отказано в прививке пациенту" + infoname);
 } else if (statusPriv === "медотвод") {
    alert("Отказано в прививке пациенту" + infoname);
 } else {
    alert("Исполнить прививку пациенту" + infoname);
 }
 }
 ForSecond = FirstFunction(person, SNILS);
 SecondFunction(statusPriv, infoname);
 
 //Предлагаем закончить или продолдить работу в этом окне
 while (confirm("Продолжить проверку прививочного статуса?")) {
 ForSecond = FirstFunction(person, SNILS);
 SecondFunction(statusPriv, infoname);
 }
 
 console.log("Сеанс проверки прививочного статуса закончен");
