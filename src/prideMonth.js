var date = new Date();
var hours = date.getHours();
var day = date.getDay();
var seconds = date.getSeconds();
var minutes = date.getMinutes();
var month = date.getMonth();
var pridemonth = document.getElementById("pridemonth");

if (month == 5) {
    pridemonth.style.background = `linear-gradient(90deg, #f00, #ff2b00, #f50, #ff8000, #fa0, #ffd500, #ff0, #d4ff00, #af0, #80ff00, #5f0, #2bff00, #0f0, #00ff2b, #0f5, #00ff80, #0fa, #00ffd5, #0ff, #00d4ff, #0af, #007fff, #05f, #002bff, #00f, #2a00ff, #50f, #7f00ff, #a0f, #d400ff, #f0f, #ff00d4, #f0a, #ff0080, #f05, #ff002b, #f00)`;
    pridemonth.style.color = `#0000`;
    pridemonth.style.backgroundClip = `text`;
    pridemonth.style.fontWeight = `bold`;
    pridemonth.style.display = `inline-block`;
    pridemonth.innerHTML = 'Happy Pride Month!';
    pridemonth.style.fontSize = `30px`;
}

