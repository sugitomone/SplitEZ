function calculate() {
  const total = parseFloat(document.getElementById("total").value);
  const person1 = document.getElementById("person1").value;
  const amount1 = parseFloat(document.getElementById("amount1").value);
  const person2 = document.getElementById("person2").value;
  const amount2 = parseFloat(document.getElementById("amount2").value);

  if (isNaN(total) || isNaN(amount1) || isNaN(amount2)) {
    document.getElementById("result").textContent = "正しい数値を入力してください。";
  } else {
    const share1 = (amount1 / (amount1 + amount2)) * total;
    const share2 = (amount2 / (amount1 + amount2)) * total;

    const resultText = `${person1} は ${share1.toFixed(2)} を支払うべきで、${person2} は ${share2.toFixed(2)} を支払うべきです。`;
    document.getElementById("result").textContent = resultText;
  }
}
