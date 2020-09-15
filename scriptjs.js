function newNote() {
  document.getElementById("notes").innerHTML += '\
    <div class="sticky-note-pre">\
        <div class="handle" fixed><span class="title" contenteditable>TITLE</span><i class="fa fa-times fa-xs" id="cross" onclick="close()" aria-hidden="true"></i></div>\
        <div contenteditable class="contents" id="extract">awesome</div>\
        <button class="btn btn-light" id="expand" onclick="on()">Expand</button>\
        <div id="overlay" onclick="off()"><div id="text"></div></div>\
    </div>'
}

function on() {
  document.getElementById("overlay").style.display = "block";
  var x = document.getElementById("extract").innerText;
  document.getElementById("overlay").innerHTML = x;  
}

function off() {
  document.getElementById("overlay").style.display = "none";
}