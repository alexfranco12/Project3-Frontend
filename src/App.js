import { Route, Link } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Search from './components/search-page/Search'
import Footer from './components/footer/Footer'
import Places from './components/places-page/Places';
import PlaceDetails from './components/place-detail/PlaceDetails';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Header />
      </header>

      <nav className="app-navigation">

      </nav>

      <main className="app-main">
        <Route exact path="/" component={Search} />
        <Route exact path="/places" component={Places} />
        <Route exact path="/detail/:id" render={routerProps => (
          <PlaceDetails match={routerProps.match} />
        )}/>
      </main>

      <footer className="app-footer">
        <Footer />
      </footer>
    </div>


  );
}

export default App;
