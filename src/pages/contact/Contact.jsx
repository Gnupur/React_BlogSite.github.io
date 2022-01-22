import "./contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <span className="greetings">Hola ! Nice to see you here :)</span>
      <img src={require("../../photos/new_img2.jpg")} className="ContactImg" />
      <div className="contactWrapper">
        <label>My Name</label>
        <p className="ContactName">Nupur Gaikwad</p>
        <label>Email</label>
        <p className="ContactEmail">nupurdummy123@gmail.com</p>
        <label>Contact Number</label>
        <p className="ContactNumber">+91 9999999999</p>
        <label>Education</label>
        <p className="contatEducation">
          Currently pursuing B.Tech 3rd year in Engineering Physics in IITG{" "}
        </p>
      </div>
    </div>
  );
}
