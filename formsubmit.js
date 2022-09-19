var scriptURL = "https://script.google.com/macros/s/AKfycbzlWTFuJu7U_e87gBdYoS62CKDBCjmbc2e_eIm4gw2JYJy-4zE9AtTMVTB8AW_11nWk/exec";
var form = document.forms['contact']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, {method:'POST', body: new FormData(form)})
  .then(response => alert("Thank you. We will reach out to you shortly."))
  .catch(error => console.error('Error!',error.message))
})
