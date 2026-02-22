const scores = document.querySelectorAll('.rating__btn');
console.log(scores)

scores.forEach(score => {
  score.addEventListener('click', () => {
    scores.forEach(score => score.classList.remove('btn-active'));
    
    score.classList.add('btn-active');
  })

})