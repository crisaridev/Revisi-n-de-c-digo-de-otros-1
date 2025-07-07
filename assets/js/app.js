const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
//Add variable names instead of letters without context
const $name = document.querySelector('.name');
const $blog = document.querySelector('.blog');
const $location = document.querySelector('.location');

async function displayUser(username) {
  $name.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(response);
  //await the response and convert into json format in order to access on it.
  const json = await response.json();
  console.log(json);
  //Assign the text in the labels in html
  $name.textContent = `Name: ${json['name']}`;
  $blog.textContent = `Blog: ${json['blog']}`;
  $location.textContent =` Location: ${json['location']}`;
}

function handleError(err) {
  console.log('OH NO');
  console.log(err);
  $name.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);