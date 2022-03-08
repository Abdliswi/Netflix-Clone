import {useState,useEffect} from 'react';
import axios from 'axios';
import MovieList from '../MovieList/MovieList';
import '../Home/Home.css';
function Home(){
    const [data,setData]= useState([]);

    const getAllMovies = async () => {
       
        return await axios.get(`https://library-movies.herokuapp.com/trending`)
            .then(result => {
                console.log(result.data);
                return result.data;
            }).catch((err) => {
                console.log(err);
            })
        }
            useEffect(() => {
                void (async () => {
                    let data = await getAllMovies();
                    setData(data);
                })();
            }, []);

    return (
        <>
         <MovieList data= {data} />
        </>
    )
}

export default Home;
