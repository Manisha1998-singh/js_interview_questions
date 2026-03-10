let obj = [
  "https://picsum.photos/id/1015/400/300",
  "https://picsum.photos/id/1025/400/300",
  "https://picsum.photos/id/1035/400/300",
];

let leftBtn = document.getElementById("leftbtn");
let rightBtn = document.getElementById("rightbtn");
let img = document.getElementById("slider");
let index = 0;
img.src = obj[index];
leftBtn.addEventListener("click", function () {
  if (index > 0) {
    index--;
    img.src = obj[index];
  }
  leftBtn.disabled = index === 0;
  rightBtn.disabled = index === obj.length - 1;
});
rightBtn.addEventListener("click", function () {
  if (index < obj.length - 1) {
    index++;
    img.src = obj[index];
  }
  leftBtn.disabled = index === 0;
  rightBtn.disabled = index === obj.length - 1;
});
