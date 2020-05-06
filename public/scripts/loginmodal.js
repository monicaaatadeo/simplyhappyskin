console.log('Login JS')
const loginForm = document.getElementById('loginForm');


// Submit Event Listener
loginForm.addEventListener('submit', handleLoginSubmit);

// Handle Submit
function handleLoginSubmit(event) {
  event.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-pass').value;

  const userData = {
    email,
    password,
  };
  
  console.log('Submitting User Data ---->', userData);

  fetch('/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'credentials': 'include', // This must be included in all API requests until user logs out
    },
    body: JSON.stringify(userData),
  })
    .then((stream) => stream.json())
    .then((res) => {
      if (res.status === 200) {
        window.location = '/profile';
      } else {
        console.log(res);
      }
    })
    .catch((err) => console.log(err));
}