// INSTRUKCJE WARUNKOWE SWITCH

let score = document.getElementById("score");

let color = "secondColor";

switch (color)
{
    case "firstColor":
        score.style.borderColor = "#256F45";
        score.style.backgroundColor = "#A4356F";
        score.style.color = "#1F1131";
        break;
    case "secondColor":
        score.style.backgroundColor = "#648BCB";
        score.style.borderColor = "#EFB6BE";
        score.style.color = "#DDF4F2";
        break;
    case 3:
        score.style.backgroundColor = "#F1D0DE";
        score.style.borderColor = "#C4DFAE";
        score.style.color = "#614323";
        break;
    default:
        score.style.backgroundColor = "black";
        score.style.borderColor = "red";
        score.style.color = "white";
        break;
}