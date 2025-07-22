const inputBox = document.getElementById("input-box");
const container = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === '') {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    container.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // cross symbol
    li.appendChild(span);
  }

  inputBox.value = "";
  saveData();
}

container.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", container.innerHTML);
}

function showTask() {
  container.innerHTML = localStorage.getItem("data");
}

showTask(); // call on page load
