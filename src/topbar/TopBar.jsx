import { Link } from "react-router-dom";
import "./topbar.css";

const user = true;
export default function TopBar() {
  return (
    <div className="top">
      <div className="topleft">
        <i className=" topicon fab fa-facebook-square"></i>
        <i className="topicon fab fa-twitter-square"></i>
        <i className="topicon fab fa-instagram"></i>
        <i className="topicon fab fa-pinterest"></i>
      </div>
      <div className="topcenter">
        <ul className="toplist">
          <li className="toplistItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="toplistItem">
            {" "}
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="toplistItem">
            {" "}
            <Link className="link" to="/settings">
              UPDATE
            </Link>
          </li>
          <li className="toplistItem">
            {" "}
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="toplistItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topright">
        {user ? (
          <img src={require("../photos/img1.jpg")} className="toprightImg" />
        ) : (
          <ul className="toplist">
            <li className="toplistItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="toplistItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>{" "}
          </ul>
        )}
        <i className="topsearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

//(<img src={require("../photos/img1.jpg")} className="toprightImg" />
//          <i className="topsearchIcon fas fa-search"></i>)
