import './header.scss'
import logo from './logo.png'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { movieList } from '../../assets/data/movie';

export const Header = () => {
  const navigate = useNavigate();
  const handleLogoClick =()=>{
    navigate('/')
  }
  // const [searchQuery, setSearchQuery]=useState("");
  // const handelInputChange = (event)=>{
  //   setSearchQuery(event.target.value)
  // }
  // const handleSearch =()=>{

  // }
  return (
    <nav className="navbar bg-white shadow app-header ">
      <div className="container mt-0 p-2 ">
        <div className="navbar-logo">
          <img src={logo} alt='BookMyShow' onClick={handleLogoClick}/>
        </div>
        <form className="d-flex search-bar" role="search">
          <div className="input-group">
            <span className="input-group-text bg-transparent">
              <i className="fa-solid fa-magnifying-glass" ></i>
            </span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="Search for Movies"
              aria-label="Search.."
              aria-describedby="basic-addon1"
             

            />
          </div>
        </form>

        <div className="d-flex align-items-center ">
          <button className="login-btn header-btn me-2 " type="submit">
            Login
          </button>
          <button className="btn header-btn" type="submit">
            {" "}
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};
