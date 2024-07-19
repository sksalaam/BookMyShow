import './aboutMovie.scss'
export const AboutMovie=({movieDetail})=>{
    return(
        <div className="aboutMovie container">
        <h5>About the movie</h5>
        <p>{movieDetail.aboutMovie}</p>
        </div>

    )
}