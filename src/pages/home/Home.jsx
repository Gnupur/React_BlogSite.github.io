import "./home.css";
import Header from "../../components/header/Header"; //remember
import Posts from "../../posts/Posts";
import Sidebar from "../../sidebar/Sidebar";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
