function timePerSecond() {
  let d = new Date();
  let time = d.toLocaleTimeString();

  console.log(time);

  setTimeout(timePerSecond, 1000);
}

timePerSecond()