window.onload = init;

function init() {
    const inputItems = document.querySelectorAll("#rate>input");
    for (let i = 0; i < inputItems.length; i++) {
        inputItems[i].onclick = handleClick;
    }

    const btnSubmit = document.querySelector("#btnSubmit");
    btnSubmit.onclick = handleEnd;
}

function handleClick(eventObj) {
    const selected = document.querySelector("#selected");
    const inputItem = eventObj.target;
    let num = inputItem.value;
    selected.innerHTML = num;
}

function handleEnd() {
    const start = document.querySelector("#start");
    const end = document.querySelector("#end");
    if (end.classList.contains("close")) {
        end.classList.remove("close");
        start.classList.add("close");
    }
}
