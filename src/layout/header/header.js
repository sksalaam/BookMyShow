import './header.scss'
import logo from './logo.png'
import { useNavigate } from "react-router-dom";
import { GenericSearch } from './genericSearch';

export const Header = () => {
  
  const navigate = useNavigate();
  const handleLogoClick =()=>{
    navigate('/')
  }
  
  
  return (
    <nav className="navbar bg-white shadow app-header ">
      <div className="container mt-0 p-2 ">
        <div className="navbar-logo">
          <img src={logo} alt='BookMyShow' onClick={handleLogoClick}/>
        </div>
        <GenericSearch/>
        

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
