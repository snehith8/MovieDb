import {useState, useEffect} from 'react'
import {useHistory, useLocation} from 'react-router-dom'

const SearchedMovies = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState('')

  const history = useHistory()
  const location = useLocation()

  const MOVIE_NAME = new URLSearchParams(location.search).get('query')

  const API_KEY = process.env.REACT_APP_TMDB_API_KEY
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${MOVIE_NAME}&page=1`

  useEffect(() => {
    const details = async () => {
      const response = await fetch(url)
      const resdata = await response.json()

      if (response.ok) {
        setData(resdata)
      } else {
        setError('')
      }
    }
    details()
  }, [url])

  return (
    <>
      {data && (
        <ul>
          {data?.results?.map(e => (
            <li key={e.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${e.poster_path}`}
                alt={e.title}
              />
              <hr />
              <div className="details">
                <p>{e.title}</p>
                <p>{e.vote_average}</p>
                <button
                  type="button"
                  onClick={() => {
                    history.push(`/movie/${e.id}`)
                  }}
                >
                  View Details
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {error && <p>{error}</p>}
    </>
  )
}

export default SearchedMovies
