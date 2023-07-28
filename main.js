const button = document.querySelector(".button");
const success = document.querySelector(".success");
const subscribing = document.querySelector(".subscribing");
const dismiss = document.querySelector(".dismiss");
const email = document.querySelector(".email");
const updatedEmail = document.querySelector(".email-tfs");

button.addEventListener("click", function (event) {
  event.preventDefault();
  let isValid = validateEmail(email.value);
  console.log(isValid);
  if (isValid) {
    subscribing.setAttribute("aria-hidden", "true");
    success.setAttribute("aria-hidden", "false");
    updatedEmail.innerHTML = email.value;
    email.value = "";
  }
});

dismiss.addEventListener("click", function (event) {
  subscribing.setAttribute("aria-hidden", "false");
  success.setAttribute("aria-hidden", "true");
});

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
