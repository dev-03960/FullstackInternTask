import "./Footer.scss";
import Group_3 from "../../assets/Group 143726566.svg";
export function Footer(){

    return(<>
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
    </>)
}