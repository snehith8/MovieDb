import {useHistory} from 'react-router-dom'
import {useState} from 'react'

const Navbar = () => {
  const history = useHistory()
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = () => {
    if (searchValue.trim()) {
      history.push(`/search?query=${searchValue}`)
      setSearchValue('')
    }
  }

  return (
    <nav>
      <h1>movieDB</h1>
      <>
        <button
          type="button"
          onClick={() => {
            history.push('/')
          }}
        >
          Popular
        </button>

        <button
          type="button"
          onClick={() => {
            history.push('/top-rated')
          }}
        >
          Top Rated
        </button>

        <button
          type="button"
          onClick={() => {
            history.push('/upcoming')
          }}
        >
          Upcoming
        </button>
      </>

      <div style={{display: 'flex'}}>
        <input
          type="search"
          placeholder="search a movie"
          value={searchValue}
          onChange={e => {
            setSearchValue(e.target.value)
          }}
        />

        <button type="button" onClick={handleSearch}>
          search
        </button>
      </div>
    </nav>
  )
}
export default Navbar
