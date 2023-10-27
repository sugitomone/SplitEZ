document.getElementById("calculateButton").addEventListener("click", function () {
  const person1 = document.getElementById("person1").value;
  const amount1 = parseFloat(document.getElementById("amount1").value);
  const person2 = document.getElementById("person2").value;
  const amount2 = parseFloat(document.getElementById("amount2").value);

  if (isNaN(amount1) || isNaN(amount2)) {
    document.getElementById("results").textContent = "正しい金額を入力してください。";
  } else {
    const share1 = (amount1 / (amount1 + amount2)).toFixed(2);
    const share2 = (amount2 / (amount1 + amount2)).toFixed(2);

    const resultText = `${person1} は ${share1} を支払うべきで、${person2} は ${share2} を支払うべきです。`;
    document.getElementById("results").textContent = resultText;
  }
});
