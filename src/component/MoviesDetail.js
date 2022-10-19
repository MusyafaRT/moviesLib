import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Hero from "./Hero";

const MoviesDetail = () => {
    const[moviesDetail, setMovieDetail] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const poster_url = `https://image.tmdb.org/t/p/w500${moviesDetail.poster_path}`;
    const backdrop = `https://image.tmdb.org/t/p/original${moviesDetail.backdrop_path}`;
    const{id} = useParams();
    const not_found = require('./404.png');

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2de5b1ec0a5da1d63e930bf641c8422c&language=en-US`)
        .then(response => response.json())
        .then(data => {
            setTimeout(() =>{
                setMovieDetail(data);
                setIsLoading(false);
            }, 500)
        })
    }, [id])
    
    function posterReady(){
        if(moviesDetail.poster_path == 'null'){
            console.log(moviesDetail.poster_path)
            return poster_url = not_found;
        }else{
            return poster_url;
        }
    }

    function renderMovieDetails() {
        if(isLoading){
            return <Hero text="Loading ... "/>
        } 
        if(moviesDetail){
            return (
                <>
                    <Hero text={moviesDetail.original_title} backdrop={backdrop}/>
                    <div className="details-container">
                        <div>
                            <img src={posterReady} 
                            className="poster-img" 
                            alt={moviesDetail.original_title}
                            />
                        </div>
                        <div className="details">
                            <h1>{moviesDetail.original_title}</h1>
                            <p className="overview">{moviesDetail.overview}</p>
                        </div>
                    </div>
                </>
            )
        }
    }
    return renderMovieDetails();
}

export default MoviesDetail;