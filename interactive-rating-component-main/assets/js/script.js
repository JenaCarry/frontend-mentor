window.onload = init;

function init() {
    const radios = document.querySelectorAll("input[type='radio']");
    for (let i = 0; i < radios.length; i++) {
        radios[i].onclick = handlerClick;
    }

    const btnSubmit = document.querySelector("#btnSubmit");
    btnSubmit.onclick = handlerSubmit;
}

function handlerClick(e) {
    const selected = document.querySelector("#selected");
    let radioCurrent = e.target;
    let radioValue = radioCurrent.value;
    selected.innerHTML = radioValue;
}

function handlerSubmit() {
    const container = document.querySelector(".container");
    const start = document.querySelector("#start");
    const end = document.querySelector("#end");
    end.classList.remove("close");
    start.classList.add("close");
    container.classList.add("anima");
}
