import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { MovieDetails } from "./MovieDetails";
import { AppLayout } from "../layout";

export const Pages=()=>{
    return(
        <BrowserRouter>
        <AppLayout>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/movieDetail/:movieId" element={<MovieDetails/>}/>    
                  
        </Routes>
        </AppLayout>
        </BrowserRouter>
    )
}