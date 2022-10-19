import Hero from "./Hero";
import {Link} from 'react-router-dom';
import {posterReady} from "./MoviesDetail";

const Moviecard =({movie}) => {
  const poster_url = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const detailURL = `/movies/${movie.id}`;
  const not_found = require('./404.jpg');
  function posterReady(){
    if(movie.poster_path == null){
        return  <img src={not_found} className="card-img-top poster-img p-1" alt={movie.original_title}/>
    }else{
        return <img src={poster_url} className="card-img-top poster-img p-1" alt={movie.original_title}/>
    }
}
  return(
      <div className="card m-2 movieCard text-center p-2">
        {posterReady()}
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={detailURL} className="btn btn-primary">Show Detail</Link>
        </div>
      </div>
  )
}


const Searchview = ({keyword, searchResult}) => {
  const searching = `You're Searching For ${keyword}`;

  const resultsMovie = searchResult.map((obj, i) => {
    return <Moviecard movie={obj} key={i} />
  })
  return (
    <>
      <Hero text={searching} />
      {
        resultsMovie.length > 0 ?
        (<div className="container-movieCard container-sm d-flex flex-wrap justify-content-center">
          {resultsMovie}
        </div>) :
        (<div className="details-container">
          <h1 className="text-center p-3 d-flex justify-content-center not-found">404 not found</h1>
        </div>
        )
      }
    </>
  );
};

export default Searchview;
