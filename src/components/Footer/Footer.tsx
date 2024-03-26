import fb from "/fb.svg";
import insta from "/insta.svg";
import tiktok from "/tiktok.svg";
import ytb from "/ytb.svg";
import "./footer.css";

function Footer() {
  return (
    <footer
      id="footer"
      className="container bg-violet-700 !w-full layoutSize mt-[5rem]"
    >
      <div className="social-media">
        <h1 className="title">Ramadhan Karim</h1>
        <div className="icons">
          <img src={fb} width={"30px"} />
          <img src={insta} width={"30px"} />
          <img src={tiktok} width={"30px"} />
          <img src={ytb} width={"30px"} />
        </div>
      </div>
      <p className="copyright">
        &copy; Copyright {new Date().getFullYear()} -{" "}
        {new Date().getFullYear() + 1}{" "}
      </p>
    </footer>
  );
}

export default Footer;
