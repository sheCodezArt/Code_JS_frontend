function check() {
    var win = window.open("https://www.google.com", "_blank", "width=200, height=100");
    if (win) {
        document.getElementById("show").innerHTML = `Window opened successfully`;
    }
    else {
        document.getElementById("show").innerHTML = `Window blocked`;
    }
  
}

function checkWinDimensions() {
    var win = window.open("https://www.google.com", "_blank", "width=500, height=400");
    if (win) {
        document.getElementById("show").innerHTML = `Window opened successfully`;
        document.getElementById("show").innerHTML = `Width: ${win.outerWidth} Height: ${win.outerHeight}`;
    }
    else {
        document.getElementById("show").innerHTML = `Window blocked`;
    }
  
}