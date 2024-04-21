let Lotto_number = prompt("กรอกเลที่ต้องการซื้อ 2หลัก :")
document.getElementById("guest_number").innerHTML = Lotto_number
document.getElementById("result").innerHTML = Math.floor(Math.random() * 100);

