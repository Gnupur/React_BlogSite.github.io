import "./sidebar.css";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span>
          <div className="sidebarTitle">ABOUT ME</div>
        </span>
        <span className="img">
          <img src={require("../photos/new_img2.jpg")} className="img" />
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          voluptatibus impedit esse repellat
        </p>
      </div>
      <div className="sidebarItem">
        <span>
          <div className="sidebarTitle">CATEGORIES</div>
        </span>
        <ul className="sidebarList">
          <li className="sidebarListItem">LIFE</li>
          <li className="sidebarListItem">MUSIC</li>
          <li className="sidebarListItem">STYLE</li>
          <li className="sidebarListItem">SPORT</li>
          <li className="sidebarListItem">CINEMA</li>
          <li className="sidebarListItem">TECH</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span>
          {" "}
          <div className="sidebarTitle">FOLLOW US</div>
        </span>
        <div className="sidebarSocial">
          <i className=" sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-instagram"></i>
          <i className="sidebarIcon fab fa-pinterest"></i>
        </div>
      </div>
    </div>
  );
}

//<img src={require("../photos/profile.jpg")} className="img" />
