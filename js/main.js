const scores = document.querySelectorAll('.rating__btn');
const selectedRating = document.querySelector('.selected-rating');
const submitBtn = document.querySelector('.rating__submit');


//body
const bodyEl = document.querySelector('body');

// rating div
const ratingEl = document.querySelector('.rating');


//thanks
const thanksEl = document.querySelector('.thanks');


scores.forEach(score => {
  score.addEventListener('click', () => {
    scores.forEach(score => score.classList.remove('btn-active'));

    score.classList.add('btn-active');

    const number = score.textContent;

    selectedRating.textContent = number;
  })

})

submitBtn.addEventListener('click', () => {
  ratingEl.classList.add('not-visible');

  thanksEl.classList.remove('not-visible');
})


thanksEl.addEventListener('click', () => {
  ratingEl.classList.remove('not-visible');

  thanksEl.classList.add('not-visible');
})

// bodyEl.addEventListener('click', () => {
//   ratingEl.classList.remove('not-visible');

//   thanksEl.classList.add('not-visible');
// })