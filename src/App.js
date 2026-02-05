import {Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Toprated from './components/Toprated'
import Upcoming from './components/Upcoming'
import SingleMovieDetails from './components/SingleMovieDetails'
import SearchedMovies from './components/SearchedMovies'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/top-rated" component={Toprated} />
      <Route exact path="/upcoming" component={Upcoming} />
      <Route exact path="/movie/:id" component={SingleMovieDetails} />
      <Route exact path="/search" component={SearchedMovies} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
