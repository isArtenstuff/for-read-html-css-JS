let round = prompt("คุณจะเล่นทั้งหมดกี่รอบ ?")
var score = 0
for (i = 0; i < round; i++) {
    var answer = prompt("Head or Tail ??")
    var random_answer = ""
    if (Math.floor(Math.random() * 10) <= 4) {
        //Head
        random_answer = "Head"
    }
    else {
        //Tail
        random_answer = "Tail"
    }
    if (answer == random_answer) {
        score += 1
    }
    else {
        score + 0
    }
    console.log(answer + " : " + random_answer)
    if (answer == random_answer) {
        document.getElementById("game-list").innerHTML += "ครั้งที่ : " + (i + 1) + "Your answer :" + answer + "   :   " + "Correct answer : " + random_answer + "<br>"
    }
    else {
        document.getElementById("game-list").innerHTML += "ครั้งที่ : " + (i + 1) + "Your answer :" + answer + "   :   " + "Correct answer : " + random_answer + "<br>"
    }
}
document.getElementById("result").innerHTML = "คะแนนของคุณ :" + score