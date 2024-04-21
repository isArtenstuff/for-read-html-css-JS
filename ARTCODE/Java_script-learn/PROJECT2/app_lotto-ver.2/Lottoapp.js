let Lotto_number = prompt("กรอกเลที่ต้องการซื้อ 2หลัก :")
let random_number = Math.floor(Math.random() * 100);
document.getElementById("guest_number").innerHTML = Lotto_number
document.getElementById("random").innerHTML = random_number
if (Lotto_number == random_number) {
    document.getElementById("result").innerHTML = "ดีใจด้วยคุณคือผู้โชคดี1 ใน 100 !!"
}
else {
    document.getElementById("result").innerHTML = "เสียใจด้วยคุณไม่ใช่ผู้โชคดี"
}