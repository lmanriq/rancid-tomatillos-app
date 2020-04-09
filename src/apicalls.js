const BASE = 'https://rancid-tomatillos.herokuapp.com/api/v1'

export const fetchForMovies = () => {
  return fetch(BASE + '/movies')
      .then(response => response.json())
}

export const postUser = (state) => {
  return fetch(BASE + '/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: state.email, password: state.password})
    })
    .then(res => res.json())
}

export const fetchUser = (data) => {
  return fetch(BASE + `/users/${data.user.id}/ratings`)
    .then(res => res.json())
}