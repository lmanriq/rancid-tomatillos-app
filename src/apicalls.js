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

export const fetchRatings = (data) => {
  return fetch(BASE + `/users/${data.user.id}/ratings`)
    .then(res => res.json())
}

export const fetchSpecificMovie = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v1/movies/${id}`)
    .then(res => res.json())
}

export const postRating = (rating, userid, id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${userid}/ratings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ movie_id: id, rating: rating })
  })
}

export const deleteRating = (userid, ratingid) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${userid}/ratings${ratingid}`, {
    method: 'DELETE',
  })
}