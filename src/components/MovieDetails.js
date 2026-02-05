import {useLocation} from 'react-router-dom'
import useFetch from './useFetch'

const MovieDetails = () => {
  const location = useLocation()

  const MOVIE_ID = location.pathname
  const url = `https://api.themoviedb.org/3${MOVIE_ID}`
  const {movieData, error} = useFetch(url)

  return (
    <>
      {movieData && (
        <div className="moviedetails">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
            alt={movieData.title}
          />
          <hr />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <p>
              <b>
                Tittle :<i> {movieData.title}</i>
              </b>
            </p>
            <a href={movieData.homepage}>view</a>
          </div>
          <p>Rating: {movieData.vote_average}</p>
          <p>Duration: {movieData.runtime} minutes</p>
          <p>Release Date: {movieData.release_date}</p>
          <ul>
            Generes:
            {movieData?.genres?.map(e => (
              <li key={e.id}>
                <h1>{e.name}</h1>
              </li>
            ))}
          </ul>
          <hr />
          <p>Overview: {movieData.overview}</p>
          <p>Tagline: {movieData.tagline}</p>
        </div>
      )}
      {error && <p>Error: {error}</p>}
    </>
  )
}

export default MovieDetails
