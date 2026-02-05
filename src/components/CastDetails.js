import {useLocation} from 'react-router-dom'
import useFetch from './useFetch'

const CastDetails = () => {
  const location = useLocation()

  const MOVIE_ID = location.pathname
  const url = `https://api.themoviedb.org/3${MOVIE_ID}/credits`

  const {movieData, error} = useFetch(url)

  return (
    <>
      {movieData && (
        <ul>
          {movieData?.cast?.map(each => (
            <li key={each.cast_id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${each.profile_path}`}
                alt={each.name}
              />
              <hr />
              <div style={{marginLeft: '4%'}}>
                <p>
                  <b>
                    Name :<i> {each.original_name}</i>
                  </b>
                </p>
                <p>Charater: {each.character}</p>
                <p>Know for :{each.known_for_department}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      {error && <p>Error: {error}</p>}
    </>
  )
}

export default CastDetails
