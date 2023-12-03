import "./Dashboard.scss";
import Group_1 from "../../assets/Group 1.svg";
import Group_2 from "../../assets/Group 2.svg";
import pen from "../../assets/pen 1 (traced).svg";
import Group_3 from "../../assets/Group 143726566.svg"
export function Dashboard() {
  return (
    <>
      <div className="content">
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
          <button className="login-button"><span className="login">login</span></button>
        </div>
        <div className="content-body">
           </div>
        <div className="content-footer">
        <div className="container">
            <div className="card-logo">Logo</div>
            <div className="additional">
                <span className="contact">Contact@00000000.tech</span>
                <div className="icon">
                    <img src={Group_3} alt="" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
