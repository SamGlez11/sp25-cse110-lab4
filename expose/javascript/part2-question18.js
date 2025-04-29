function printCurrentTime() {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}

printCurrentTime();

// 1000 miliseconds = 1 sec
setInterval(printCurrentTime, 1000);
