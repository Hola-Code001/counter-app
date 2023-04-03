let increaseBtn = document.getElementById('increase');
let resetBtn = document.getElementById('reset');
let decreaseBtn = document.getElementById('decrease');
let countDisplay = document.getElementById('count');
let count = 0;

increaseBtn.onclick = function(){
  count += 1;
  countDisplay.innerHTML = count;
}

resetBtn.onclick = function(){
  count = 0;
  countDisplay.innerHTML = count;
}

decreaseBtn.onclick = function(){
  count -= 1;
  countDisplay.innerHTML = count;
}