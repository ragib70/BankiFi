import "../../styles.css";

function Footer() {
  return (
    <footer id="footer">
      <div className="row" style={{ padding: "0% 44% 2% 44%" }}>
        <div className="col">
          <i className="fa-brands fa-twitter fa-1x"></i>
        </div>
        <div className="col">
          <i className="fa-brands fa-facebook fa-1x"></i>
        </div>
        <div className="col">
          <i className="fa-brands fa-instagram fa-1x"></i>
        </div>
        <div className="col">
          <i className="fa-solid fa-envelope fa-1x"></i>
        </div>
      </div>
      <p>© Copyright LPProject</p>
    </footer>
  );
}

export default Footer;
