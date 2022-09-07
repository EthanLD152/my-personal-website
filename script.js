const h2 = document.createElement("h2");
h2.textContent = "Ethan Davidson";
document.querySelector("body").appendChild(h2);

document.addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
