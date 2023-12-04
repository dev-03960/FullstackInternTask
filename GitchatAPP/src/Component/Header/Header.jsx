import "./Header.scss";
import Group_1 from "../../assets/Group 1.svg";
import Group_2 from "../../assets/Group 2.svg";
import pen from "../../assets/pen 1 (traced).svg";
import { useEffect } from "react";
import { useState } from "react";
export function Header(){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        // Attach the event listener on component mount
        window.addEventListener("resize", handleResize);
    
        // Detach the event listener on component unmount
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    return(<>
    <div className="content-header">
          <div className="container">
            <div className="card-logo">Logo<span className="line"></span></div>
            <div className="card-list">
                <ul>
                    <li><button className="explore">
                        <div className="image">
                            <img src={Group_1} alt="" />
                        </div>
                        <span>Explore</span>
                        </button></li>
                    <li><button className="create">
                        <div className="image">
                            <img src={Group_2} alt="" />
                        </div>
                        <span>Create</span>
                        </button></li>
                    <li><button className="Edit">
                        <div className="image">
                            <img src={pen} alt="" />
                        </div>
                        <span>Edit</span>
                        </button></li>
                </ul>
            </div>
          </div>
          {windowWidth>1024?(<button className="login-button"><span className="login">login</span></button>):<button className="hamburger-button"> ☰</button>}
        </div>
    </>)
}