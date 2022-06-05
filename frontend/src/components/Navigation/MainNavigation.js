import React from "react"
import { NavLink } from "react-router-dom"



export default function MainNavigation()
{
    const [isOpen, setIsOpen] = React.useState(false);
  return (
      <header>
          <div className="main-navigation_logo">
              <h1><NavLink to="/">EasyEvents</NavLink> </h1> 
          </div>
          <div className="menu" onClick={()=> setIsOpen(!isOpen)} >
              <div></div>
              <div></div>
              <div></div>
          </div>
          <nav className={isOpen? "navbar":"navbar active"}>
              <ul>
                    <li><NavLink to="/events">Events</NavLink></li>
                    <li><NavLink to="/bookings">Bookings</NavLink></li>
                    <li><NavLink to="/">Login</NavLink></li>
              </ul>
          </nav>
          <style jsx>{`
            header {
                height: 60px;
                position: sticky;
                background-color: #01d1d1;
                color: #000;
                display: flex;
                place-items: center;
                justify-content: space-between;
            }
            .main-navigation_logo {
                padding: 0 1rem;
                margin: 0;
                font-size: 1rem;
            }
            .main-navigation_logo a {
                color: #fff;
                text-decoration: none;
            }

            .menu{
                width: 30px;
                height: 30px;
                display: flex;
                padding: 0 1rem;
                justify-content: space-between;
                align-items: center;
                cursor: pointer;
                flex-direction: column;
            }
            .menu > div {
                width: 30px;
                height: 4px;
                background-color: #000;
                border-radius: 10px;
            }
            .navbar {
                display: none;
                justify-content: flex-end;
                align-items: center;
            }
            .navbar.active {
                display: flex;
                justify-content: flex-end;
                align-items: center;
            }
            .navbar ul {
                display: flex;
                align-items: center;
                padding: 0 20px;
            }
            .navbar ul li {
                list-style: none;
                margin: 0 10px;
                color: #fff;
            }
            .navbar ul li a {
                color: #000;
                text-decoration: none;
            }
            .navbar ul li a:hover {
                color: grey;
            }
            @media (min-width: 768px) {
                .navbar {
                    display: flex;
                }
                .menu{
                    display: none;
                }
            }
            
          `}</style>
    </header>
  )
}
