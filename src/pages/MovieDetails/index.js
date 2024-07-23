import { MovieDetailsBanner } from "../../components/pages";
import { AboutMovie } from "../../components/pages"; 
import { Cast } from "../../components/pages";
import {useParams} from 'react-router-dom';
import {movieList} from '../../assets/data/movie'
import { useEffect, useState } from "react";

export const MovieDetails = () => {

  const [movieDetail,setMovieDetail]=useState({})

  const {movieId}= useParams();

 useEffect(()=>{

  debugger

  const det= movieList.find((data)=>data.id == movieId)

  setMovieDetail(det)
 },[movieId])
  

  return (
  <>
  <MovieDetailsBanner movieDetail={movieDetail} />
  <AboutMovie movieDetail={movieDetail}/>
  <Cast  movieDetail={movieDetail}/>
  </>
  )
};
