import "../css/Footer.scss";
//import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="footerContainer">
      <div className="footerTextArea">
        <p className="footerText1">Backpacker v.Demo © 2021 </p>
        <div className="footerText2">
          Contact
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
          About us
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
      <div className="footerBtnBox">
        <a className="socialBtn" href="" target="_blank" rel="noreferrer">
          <img className="githubBtn" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
