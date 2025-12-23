function countWords() {
  let text = document.getElementById("text").value.trim();
  let words = text === "" ? 0 : text.split(/\s+/).length;
  document.getElementById("result").innerText = "Words: " + words;
}

function countChars() {
  let text = document.getElementById("text").value;
  document.getElementById("result").innerText = "Characters: " + text.length;
}

function reverseText() {
  let text = document.getElementById("text").value;
  document.getElementById("text").value = text.split("").reverse().join("");
}

function removeSpaces() {
  let text = document.getElementById("text").value;
  document.getElementById("text").value = text.replace(/\s+/g, " ").trim();
}

function toUpper() {
  let t = document.getElementById("text");
  t.value = t.value.toUpperCase();
}

function toLower() {
  let t = document.getElementById("text");
  t.value = t.value.toLowerCase();
}

function generatePassword() {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  let pass = "";
  for (let i = 0; i < 12; i++) {
    pass += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById("text").value = pass;
  document.getElementById("result").innerText = "Password Generated";
}

