import {useState} from 'react'
import MovieDetails from './MovieDetails'
import CastDetails from './CastDetails'

const SingleMovieCast = () => {
  const [activetab, setActivetab] = useState('movie')

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          margin: '5vh',
          marginBottom: '0vh',
        }}
      >
        <button
          type="button"
          onClick={() => {
            setActivetab('movie')
          }}
        >
          Movie Details
        </button>
        <button
          type="button"
          onClick={() => {
            setActivetab('cast')
          }}
        >
          Cast Details
        </button>
      </div>
      {activetab === 'movie' && <MovieDetails />}
      {activetab === 'cast' && <CastDetails />}
    </>
  )
}

export default SingleMovieCast
