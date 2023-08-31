var ol = document.querySelector("ol");
var highScores = JSON.parse(localStorage.getItem("highscores"))




function renderScores () {
    console.log(highScores);
    if (highScores) {
        return JSON.parse(highScores)
    } else {
        return [];
    }
    }

    var scores = renderScores();




    for (var i = 0; i < highScores.length; i++) {
        var initials = highScores[i].initials;
        var duration = highScores[i].duration;
        var li = document.createElement("li");
        li.textContent = "";
        ol.appendChild(li);
    }