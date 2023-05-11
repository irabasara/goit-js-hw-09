function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const promiseForm = document.querySelector('.form');
const delayEL = document.querySelector('[name=delay]');
const stepEL = document.querySelector('[name=step]');
const amountEL = document.querySelector('[name=amount]');
// console.log();

promiseForm.addEventListener('submit', onBtnClick);

function onBtnClick(event) {
  event.preventDefault();

  createPromise();

  let delay = delayEL.value;
  let step = stepEL.value;
  let amount = amountEL.value;

  for (let i = 1; i <= amount; i += 1) {
    delay = (delay = step) * i;

    createPromise(i, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}
