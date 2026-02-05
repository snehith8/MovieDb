import {useHistory} from 'react-router-dom'
import useFetch from './useFetch'

const Toprated = () => {
  const history = useHistory()

  const url = 'https://api.themoviedb.org/3/movie/top_rated'
  const {movieData, error} = useFetch(url)

  return (
    <>
      <h1>Top rated</h1>
      {movieData && (
        <ul>
          {movieData?.results?.map(movie => (
            <li key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="details">
                <p>{movie.title}</p>
                <p>{movie.vote_average}</p>
                <button
                  type="button"
                  onClick={() => {
                    history.push(`/movie/${movie.id}`)
                  }}
                >
                  View Details
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {error && <p>Error: {error}</p>}
    </>
  )
}

export default Toprated
