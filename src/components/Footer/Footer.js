import "./Footer.css";

const Footer = () => {
  let date = new Date().toLocaleDateString("fr", { year: "numeric" });

  return (
    <div className="body-container-test">
      <div className="body-footer">
        <p>Designed and built by Nans Delaubert</p>
        <p>©Copyright {date} - Nans Delaubert</p>
      </div>
    </div>
  );
};

export default Footer;
