console.log("running");
let result = 0;
let box;

const plus = () => {
  box = document.getElementById("textNb").value;
  result = result + Number(box);
  document.getElementById("resultBox").innerText = result;
};
document.getElementById("buttonPlus").addEventListener("click", plus);

const min = () => {
  box = document.getElementById("textNb").value;
  result = result - Number(box);
  document.getElementById("resultBox").innerText = result;
};
document.getElementById("buttonMin").addEventListener("click", min);
