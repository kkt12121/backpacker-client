import "../css/Footer.scss";

function Footer() {
  return (
    <footer id="footerContainer">
      <div className="footerTextArea">
        <p className="footerText1">Backpacker v.Demo © 2021 </p>
        <div className="footerText2">
          <div className="footerTitle">Contact</div>
          <p>
            <a className="linkGithub" href="https://github.com/altanis7">
              Hong@github
            </a>
          </p>
          <p>
            <a className="linkGithub" href="https://github.com/codono">
              Seo@github
            </a>
          </p>
          <p>
            <a className="linkGithub" href="https://github.com/junhyok">
              Son@github
            </a>
          </p>
          <p>
            <a className="linkGithub" href="https://github.com/kkt12121">
              Kim@github
            </a>
          </p>
        </div>
        <div className="footerText2">
          <div className="footerTitle">AboutUs</div>
          <p>
            <a
              className="linkGithub"
              href="https://github.com/codestates/backpacker-client/wiki"
            >
              Repository
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
