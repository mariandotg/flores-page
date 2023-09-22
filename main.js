const startBtn = document.getElementById('btn-start');
const resetBtn = document.getElementById('btn-reset');

startBtn.addEventListener('click', () => {
  console.log("click")
  var animatedElements = document.querySelectorAll('.hidden');
  animatedElements.forEach(function (element) {
    if(element.classList.contains('first')){
        element.classList.remove('hidden')
        element.classList.add('animated')
    } else if(element.classList.contains('second')){
      setTimeout(() => {
        element.classList.remove('hidden')
        element.classList.add('animated')
      }, 1500)
    } else {
      setTimeout(() => {
        element.classList.remove('hidden')
        element.classList.add('animated')
      }, 4000)
    }
    element.addEventListener('animationstart', function () {
      setTimeout(() => {
        element.classList.remove('fill-transp')
      }, 1800)
    });
  });
})

resetBtn.addEventListener('click', () => {
  var animatedElements = document.querySelectorAll('.animated');
  animatedElements.forEach(function (element) {
    element.classList.remove('animated')
    element.classList.add('hidden')
    element.classList.add('fill-transp')
  });
})

document.addEventListener('DOMContentLoaded', function () {
  var animatedElements = document.querySelectorAll('.animated');
  animatedElements.forEach(function (element) {
    element.addEventListener('animationstart', function () {
      setTimeout(() => element.classList.remove('fill-transp'), 1800)
    });
  });
});