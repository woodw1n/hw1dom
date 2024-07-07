/*Задания:
1)Получите элемент по ID:
Получите кнопки с ID changeColorButton и выведите его в консоль.
2)Получите элементы по классу:
Получите все элементы с классом text и выведите их в консоль.
3)Получите элементы по тегу:
Получите все <li> и выведите их в консоль.
4)Измените стиль элементов:
Добавьте обработчик события click на кнопку с ID changeColorButton, который будет изменять фон
всех параграфов с классом text на жёлтый (добавлять класс highlight).
5)Измените текст элементов:
Пройдитесь по всем <li> элементам и измените их текст на "Изменённый элемент списка X", где X - это номер
 элемента.
 6)Добавьте новый элемент:
Создайте новый <p> элемент с текстом "Новый параграф" и добавьте его в конец #container.
7)   Поиск элементов с querySelector:
Используйте document.querySelector и document.querySelectorAll для поиска первого параграфа и всех 
параграфов соответственно. Выведите их в консоль.


собственно выполнение..*/
//Получите элемент по ID:
//Получите кнопки с ID changeColorButton и выведите его в консоль.
console.log(document.getElementById("changeColorButton"));
//2)Получите элементы по классу:
//Получите все элементы с классом text и выведите их в консоль.
console.log(document.getElementsByClassName("text"));
/*3)Получите элементы по тегу:
Получите все <li> и выведите их в консоль*/
console.log(document.getElementsByTagName("li"));
/*4)Измените стиль элементов:
Добавьте обработчик события click на кнопку с ID changeColorButton, который будет изменять фон
всех параграфов с классом text на жёлтый (добавлять класс highlight).*/

/*const btn = document.getElementById("#changeColorButton")
function СolorChange() {
  const Col = 'yellow'
  document.body.style.backgroundColor = Col;
}
btn.onclick = СolorChange;//меняет общий фон//*/ 
//addEventListener("click", function() {
   // item.classList.toggle("highlight");
  //});//


//document.getElementById("changeColorButton").style.backgroundColor = "blue";//меняю цвет с записанного в классе на другой только почему-то меняем цвет кнопки..//
const button = document.querySelector("#changeColorButton"); //# -обращение для ID//
console.log(button);
const pf = document.querySelectorAll("p.text"); //все селекторы <p>с классом text//
console.log(pf);
button.addEventListener("click", (event) => {
  event.preventDefault();
  pf.forEach((item) => {
    item.classList.toggle("highlight");
  });
});
/*document.getElementById("#changeColorButton").addEventListener("click",changeColor);*/

/*5)Измените текст элементов:
Пройдитесь по всем <li> элементам и измените их текст на "Изменённый элемент списка X", где X - это номер
 элемента.*/

const listLi = document.querySelectorAll("li");

listLi.forEach((val, index) => {
  val.innerText = "Изменённый элемент списка " + index ;// как добавить к индексу +1 чтобы отображалось в хтмл с единицы//
});


//щелкалка c даблекликом//
addEventListener("dblclick", function() {
    console.log("Щёлк!");
  });


// 6)Добавьте новый элемент:
//Создайте новый <p> элемент с текстом "Новый параграф" и добавьте его в конец #container.
const container = document.querySelector("#container");
const newPf = document.createElement("p");
newPf.innerHTML = "Новый параграф";
container.append(newPf);

/*7)   Поиск элементов с querySelector:
Используйте document.querySelector и document.querySelectorAll для поиска первого параграфа и всех 
параграфов соответственно. Выведите их в консоль.*/


const firstPf = document.querySelector("p");
const allPf = document.querySelectorAll("p");

console.log("The first paragraph - " + firstPf);
console.log("All paragraphs - " + allPf);
