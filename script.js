function countWords() {
  let text = document.getElementById("text").value;
  let words = text.trim().split(/\s+/).length;
  document.getElementById("result").innerText = "Words: " + words;
}

function toUpper() {
  let t = document.getElementById("text");
  t.value = t.value.toUpperCase();
}

function toLower() {
  let t = document.getElementById("text");
  t.value = t.value.toLowerCase();
}
