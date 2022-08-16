
function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  console.log(JSON.stringify({
    email: email,
    password: password
  }))
  fetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password
    }),
    headers: { "Content-Type": "application/json" }
  })
    .then(function(response) {
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert(response.statusText);
      }
      
    })
    .catch(err => console.log(err));
};
  
async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.loginbutton').addEventListener('click', loginFormHandler);

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);







