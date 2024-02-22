function changeColor() {
    var colorPicker = document.getElementById("colorPicker");
    var output = document.getElementById("output");
    output.style.color = colorPicker.value;
}

function changeFontSize() {
    var fontSizeInput = document.getElementById("fontSize");
    var output = document.getElementById("output");
    output.style.fontSize = fontSizeInput.value + "px";
}

function changeFontFamily() {
    var fontFamilySelect = document.getElementById("fontFamily");
    var output = document.getElementById("output");
    output.style.fontFamily = fontFamilySelect.value;
}