import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <div className="headerTitlesm">React & Node</div>
        <div className="headerTitlelg">Blog</div>
      </div>
      <img src={require("../photos/new_img1.jpg")} className="headerImg" />
    </div>
  );
}
