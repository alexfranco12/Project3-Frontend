import { Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Search from './components/search-page/Search'
import Footer from './components/footer/Footer'
import './App.css';

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

      </main>

      <footer className="app-footer">
        <Footer />
      </footer>
    </div>


  );
}

export default App;
