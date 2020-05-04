console.log('Signup JS');
const form = document.getElementById('registerForm');

form.addEventListener('submit', handleSignupSubmit);

// Handle Submit
function handleSignupSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const userData = {
    name,
    email,
    password,
  };

  // SUBMIT DATA TO SERVER
  console.log('Submitting User Data ---->', userData);

  fetch('/api/v1/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then((stream) => stream.json())
    .then((res) => {
      if (res.status === 201) {
        console.log(res);
        window.location = '/';
      } else {
        console.log(res);
      }
    })
    .catch((err) => console.log(err));
}