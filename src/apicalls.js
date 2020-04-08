export const fetchForMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
      .then(response => response.json())
}

export const postUser = (state) => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: state.email, password: state.password})
    })
    .then(res => res.json())
}

export const fetchUser = (data) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${data.user.id}/ratings`)
    .then(res => res.json())
}