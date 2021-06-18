import './App.css';
import { Switch, Route } from 'react-router-dom'
import MoviesPage from './component/MoviesPage/MoviesPage';
import AddMoviePage from './component/AddMoviePage/AddMoviePage'
import Header from './component/Header/Header'

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/new" component={AddMoviePage} />
        <Route exact path="/" component={MoviesPage} />
      </Switch>
    </div>
  );
}

export default App;
