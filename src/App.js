import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import { Routes, Route } from 'react-router-dom';
import Aboutview from './component/Aboutview';
import Searchview from './component/SearchView';
import { useEffect, useState} from 'react';
import MoviesDetail from './component/MoviesDetail';
import PageNotFound from './PageNotFound';

function App() {
  // API_URL = "https://api.themoviedb.org/3/search/collection?api_key=2de5b1ec0a5da1d63e930bf641c8422c&language=en-US&page=1"
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if(searchText){
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=2de5b1ec0a5da1d63e930bf641c8422c&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
          setSearchResult(data.results)
        })
    }
  }, [searchText]);

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Aboutview />} />
        <Route path='/search' element={<Searchview keyword={searchText} searchResult={searchResult}/>} />
        <Route path='/movies/:id' element={<MoviesDetail />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
