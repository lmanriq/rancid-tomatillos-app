import * as actions from '../actions';

describe('Action Creators', () => {
  it('should have a type of CHANGE_PAGE and a correct payload', () => {
    const expectedAction = {
      type: 'CHANGE_PAGE',
      page: 'login'
    }
    const result = actions.changePage('login')
    expect(result).toEqual(expectedAction)
  })

  it('should have a type of LOAD_MOVIES and have a correct payload', () => {
    const expectedAction = {
      type: 'LOAD_MOVIES',
      movies: [
        {
          id: 1,
          title: 'Bloodshot',
          poster_path: 'https://image.tmdb.org/t/p/original//8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg',
          backdrop_path: 'https://image.tmdb.org/t/p/original//ocUrMYbdjknu2TwzMHKT9PBBQRw.jpg',
          release_date: '2020-03-05',
          overview: 'After he and his wife are murdered, marine Ray Garrison is resurrected by a team of scientists. Enhanced with nanotechnology, he becomes a superhuman, biotech killing machine—\'Bloodshot\'. As Ray first trains with fellow super-soldiers, he cannot recall anything from his former life. But when his memories flood back and he remembers the man that killed both him and his wife, he breaks out of the facility to get revenge, only to discover that there\'s more to the conspiracy than he thought.',
          average_rating: 5.75
        },
        {
          id: 2,
          title: 'Sonic the Hedgehog',
          poster_path: 'https://image.tmdb.org/t/p/original//aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg',
          backdrop_path: 'https://image.tmdb.org/t/p/original//stmYfCUGd8Iy6kAMBr6AmWqx8Bq.jpg',
          release_date: '2020-02-12',
          overview: 'Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.',
          average_rating: 5.166666666666667
        }
      ]
    }
      const result = actions.loadMovies([
        {
          id: 1,
          title: 'Bloodshot',
          poster_path: 'https://image.tmdb.org/t/p/original//8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg',
          backdrop_path: 'https://image.tmdb.org/t/p/original//ocUrMYbdjknu2TwzMHKT9PBBQRw.jpg',
          release_date: '2020-03-05',
          overview: 'After he and his wife are murdered, marine Ray Garrison is resurrected by a team of scientists. Enhanced with nanotechnology, he becomes a superhuman, biotech killing machine—\'Bloodshot\'. As Ray first trains with fellow super-soldiers, he cannot recall anything from his former life. But when his memories flood back and he remembers the man that killed both him and his wife, he breaks out of the facility to get revenge, only to discover that there\'s more to the conspiracy than he thought.',
          average_rating: 5.75
        },
        {
          id: 2,
          title: 'Sonic the Hedgehog',
          poster_path: 'https://image.tmdb.org/t/p/original//aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg',
          backdrop_path: 'https://image.tmdb.org/t/p/original//stmYfCUGd8Iy6kAMBr6AmWqx8Bq.jpg',
          release_date: '2020-02-12',
          overview: 'Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.',
          average_rating: 5.166666666666667
        }
      ])
    expect(result).toEqual(expectedAction)
  })
});