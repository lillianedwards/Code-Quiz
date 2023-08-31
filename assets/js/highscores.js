var ol = document.querySelector("ol");
var highScores = JSON.parse(localStorage.getItem("highscores"))




    for (var i = 0; i < highScores.length; i++) {
        var initials = highScores[i].initials;
        var duration = highScores[i].score;
        var li = document.createElement("li");

        li.textContent = initials + duration;
        ol.appendChild(li);
        console.log(initials, duration);

    };