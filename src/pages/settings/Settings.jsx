import "./settings.css";
import Sidebar from "../../sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={require("../../photos/nature4.jpg")}
              className="settingsImg"
            />
            <label htmlFor="fileInput">
              <i class="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Nupur" />
          <label>Email</label>
          <input type="email" placeholder="nupurdummy123@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsUpdate">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
