let counter = 0;
let timeout;
let isRunning = false;

function timedCount() {
  document.getElementById("demo").value = counter;
  counter++;
  timeout = setTimeout(timedCount, 1000);
}

function startCount() {
  if (!isRunning) {
    isRunning = true;
    timedCount();
  }
}

function stopCount() {
  clearTimeout(timeout);
  isRunning = false;
}