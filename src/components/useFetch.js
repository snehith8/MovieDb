import {useEffect, useState} from 'react'

const useFetch = reqUrl => {
  const [movieData, setMoviedata] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const getData = async () => {
      const API_KEY = process.env.REACT_APP_TMDB_API_KEY
      const url = `${reqUrl}?api_key=${API_KEY}&language=en-US&page=1`

      const response = await fetch(url)
      const data = await response.json()

      if (response.ok) {
        setMoviedata(data)
      } else {
        setError(data.err_msg)
      }
    }
    getData()
  }, [reqUrl])

  return {movieData, error}
}

export default useFetch
