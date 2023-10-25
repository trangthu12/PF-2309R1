// truy vấn HTML element
let titleElem = document.getElementById("title");

console.log(titleElem);

//truy vấn nội dung (inner HTML) của element
console.log(titleElem.innerHTML);

titleElem.innerHTML = "Average Mark Calculation";
titleElem.style.color = "red";

//thêm element mới vào studen-list

//tạo thẻ li mới
let newItemElem = document.createElement("li");

//setup nội dung cho element mới
newItemElem.innerHTML = "3.Evan - 9 - 8 -8.5";

//thêm phần tử mới vào thẻ ul
let studenListElem = document.getElementById("student-list");

 studenListElem.appendChild(newItemElem);

 //xóa form element ra khỏi trang web
 let studenFormElem = document.getElementById("student-form");
 studenFormElem.remove();