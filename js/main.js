const scores = document.querySelectorAll('.rating__btn');
const selectedRating = document.querySelector('.selected-rating');

console.log(selectedRating);


scores.forEach(score => {
  score.addEventListener('click', () => {
    scores.forEach(score => score.classList.remove('btn-active'));

    score.classList.add('btn-active');
  })

})