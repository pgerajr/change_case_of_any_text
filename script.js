let sub_title = document.getElementById("sub_title");
let my_input = document.getElementById("my_input");

function upperCase() {
    sub_title.innerText = my_input.value.toUpperCase();
    sub_title.style.color = "rgb(68, 68, 68)";

}

function lowerCase() {
    sub_title.innerText = my_input.value.toLowerCase();
    sub_title.style.color = "rgb(68, 68, 68)";

}

function wordCapitalize() {
    words = sub_title.innerText.split(" ");
    sub_title.style.color = "rgb(68, 68, 68)";

    let letters = [];
    let backWord = [];

    for (i in words) {
        letters[i] = words[i].split("");
        for (x in letters[i]) {
            if (x == 0) {
                letters[i][x] = letters[i][x].toUpperCase();
            } else {
                letters[i][x] = letters[i][x].toLowerCase();
            }
        }
        backWord[i] = letters[i].join("");
    }

    backSentence = backWord.join(" ");
    sub_title.innerText = backSentence;
}

function resetApp() {
    my_input.value = ""
    sub_title.style.color = "gray";
    sub_title.innerText = "O texto aparecerá aqui... ;)"
}