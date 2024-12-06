import "./style/style.css";
// Vector 404
import Img404 from "./assets/notfound.webp";

const Notfound = () => {
  return (
    <section id="notFound">
      <img className="img" src={Img404} alt="404" />
    </section>
  );
};

export default Notfound;
