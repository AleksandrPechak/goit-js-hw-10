import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

function createPromise(event) {
  event.preventDefault();
  const delay = parseInt(form.delay.value, 10);
  const state = form.state.value;

  const promise = new Promise((resolve, reject) => {
    if (state === 'fulfilled') {
      setTimeout(() => resolve(delay), delay);
    } else if (state === 'rejected') {
      setTimeout(() => reject(delay), delay);
    }
  });

  promise
    .then(delay => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'bottomCenter',
      });
    })
    .catch(delay => {
      iziToast.error({
        message: `❌Rejected promise in ${delay}ms`,
        position: 'bottomCenter',
      });
    });
}

form.addEventListener('submit', createPromise);

// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";

// form.addEventListener('submit', createPromise);


// document.querySelector(".form").addEventListener("submit", function (event) {
//   event.preventDefault();

//   const delayInput = document.querySelector("input[name='delay']");
//   const stateInput = document.querySelector("input[name='state']:checked");

//   if (!delayInput.checkValidity() || !stateInput) {
//     // Вивести повідомлення про помилку, якщо дані некоректні
//     iziToast.error({
//       title: "Error",
//       message: "Invalid input. Please enter delay and choose state.",
//     });
//     return;
//   }

//   const delay = parseInt(delayInput.value, 10);
//   const state = stateInput.value;

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (state === "fulfilled") {
//         resolve(delay);
//       } else {
//         reject(delay);
//       }
//     }, delay);
//   });

//   promise
//     .then((result) => {
//       // Вивести повідомлення про вдале виконання промісу
//       iziToast.success({
//         title: "Fulfilled promise",
//         message: `✅ Fulfilled promise in ${result}ms`,
//       });
//     })
//     .catch((error) => {
//       // Вивести повідомлення про невдале виконання промісу
//       iziToast.error({
//         title: "Rejected promise",
//         message: `❌ Rejected promise in ${error}ms`,
//       });
//     });
// });

// // Описаний у документації
// import iziToast from "izitoast";
// // Додатковий імпорт стилів
// import "izitoast/dist/css/iziToast.min.css";

// document.querySelector(".form").addEventListener("submit", function (event) {
//   event.preventDefault();

//   const delayInput = document.querySelector("input[name='delay']");
//   const stateInput = document.querySelector("input[name='state']:checked");

//   if (!delayInput.checkValidity() || !stateInput) {
//     // Вивести повідомлення про помилку, якщо дані некоректні
//     iziToast.error({
//       title: "Error",
//       message: "Invalid input. Please enter delay and choose state.",
//     });
//     return;
//   }

//   const delay = parseInt(delayInput.value, 10);
//   const state = stateInput.value;

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (state === "fulfilled") {
//         resolve(delay);
//       } else {
//         reject(delay);
//       }
//     }, delay);
//   });

//   promise
//     .then((result) => {
//       // Вивести повідомлення про вдале виконання промісу
//       iziToast.success({
//         title: "Fulfilled promise",
//         message: `✅ Fulfilled promise in ${result}ms`,
//       });
//     })
//     .catch((error) => {
//       // Вивести повідомлення про невдале виконання промісу
//       iziToast.error({
//         title: "Rejected promise",
//         message: `❌ Rejected promise in ${error}ms`,
//       });
//     });
// });