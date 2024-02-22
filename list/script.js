function getRandomColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + "0".repeat(6 - randomColor.length) + randomColor;
}

function change(x) {
    var li = document.getElementById(x);
    li.style.backgroundColor = getRandomColor();
}