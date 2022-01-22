import "./singlepost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlepostWrapper">
        <img
          src={require("../photos/nature1.jpg")}
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Loreum Epsum kulu teron yuooki
          <div className="singlePostEdit">
            <i class=" singlePostIcon fas fa-edit"></i>
            <i class=" singlePostIcon fas fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b> Nupur</b>
          </span>
          <span className="singlePostDate">
            <b>1 hour ago</b>
          </span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nulla
          quo ducimus cum aliquam ullam, natus numquam optio maxime excepturi
          tempore qui doloremque in necessitatibus eveniet mollitia architecto
          ratione officiis. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quod nulla quo ducimus cum aliquam ullam, natus numquam optio
          maxime excepturi tempore qui doloremque in necessitatibus eveniet
          mollitia architecto ratione officiis. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quod nulla quo ducimus cum aliquam
          ullam, natus numquam optio maxime excepturi tempore qui doloremque in
          necessitatibus eveniet mollitia architecto ratione officiis. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quod nulla quo
          ducimus cum aliquam ullam, natus numquam optio maxime excepturi
          tempore qui doloremque in necessitatibus eveniet mollitia architecto
          ratione officiis. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quod nulla quo ducimus cum aliquam ullam, natus numquam optio
          maxime excepturi tempore qui doloremque in necessitatibus eveniet
          mollitia architecto ratione officiis.
        </p>
      </div>
    </div>
  );
}
