import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { MovieDetails } from "./MovieDetails";
import { Profile } from "./profile";
import { AppLayout } from "../layout";

export const Pages=()=>{
    return(
        <BrowserRouter>
        <AppLayout>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/movieDetail/:movieId" element={<MovieDetails/>}/>
            <Route path="/profile" element={<Profile/>}/>

        </Routes>
        </AppLayout>
        </BrowserRouter>
    )
}