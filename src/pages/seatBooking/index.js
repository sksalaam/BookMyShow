import { MovieTitle } from "./movieDetails"
import { movieList } from "../../assets/data/movie"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Calendar } from "./calendar"
import { Timings } from "./movieTimings"

export const SeatBooking =()=>{
    const {movieId}=useParams()

 const [movie, setMovie ] = useState({})

    useEffect (()=>{
    
        const det = movieList.find((data)=>data.id == movieId)
        setMovie(det)

    }, [])
    return(
       <>
       <MovieTitle movie={movie} />
       <Calendar/>
       <Timings/>
       </>
    )
}