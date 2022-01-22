import { Link } from "react-router-dom";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src={require("../photos/nature1.jpg")} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          <Link className="link" to="./post/:postId">
            Lorem epsum kulu teron yuooki
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
        <p className="postDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ex
          exercitationem animi, dolore aliquam fugiat consequatur accusantium
          voluptates ullam quaerat quae sunt ipsum excepturi aliquid? Corrupti
          adipisci inventore quas nisi? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. In ex exercitationem animi, dolore aliquam fugiat
          consequatur accusantium voluptates ullam quaerat quae sunt ipsum
          excepturi aliquid? Corrupti adipisci inventore quas nisi? Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. In ex exercitationem
          animi, dolore aliquam fugiat consequatur accusantium voluptates ullam
          quaerat quae sunt ipsum excepturi aliquid? Corrupti adipisci inventore
          quas nisi?
        </p>
      </div>
    </div>
  );
}

// <div className="postImg">
//<img src={require("../photos/profile.jpg")} alt="" />
//</div>
