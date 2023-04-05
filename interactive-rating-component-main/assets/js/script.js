one.onclick = click1;
two.onclick = click2;
three.onclick = click3;
four.onclick = click4;
five.onclick = click5;
const selected = document.getElementById("selected");

const btnSubmit = document.getElementById("btnSubmit");
btnSubmit.onclick = btnClick;

function btnClick() {
  const start = document.getElementById("start");
  const end = document.getElementById("end");
  start.setAttribute("class", "close");
  end.removeAttribute("class", "close");
}

function click1() {
  const one = document.getElementById("one");

  selected.innerHTML = "1";
}

function click2() {
  const two = document.getElementById("two");
  selected.innerHTML = "2";
}

function click3() {
  const three = document.getElementById("three");
  selected.innerHTML = "3";
}

function click4() {
  const four = document.getElementById("four");
  selected.innerHTML = "4";
}

function click5() {
  const five = document.getElementById("five");
  selected.innerHTML = "5";
}
