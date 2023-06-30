import style from "./TheFooter.module.css";
import FooterLogo from "../../assets/logo_ottonova_blue.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";

function TheFooter() {
  return (
    <>
      <footer className={style.footer}>
        <img src={FooterLogo} alt="ottonova-footer" />
        <ul className={style.social}>
          <li>
            <a href="https://twitter.com/ottonova_ag" target="_blank">
              <TwitterIcon fontSize="medium" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/ottonovahealth"
              target="_blank"
              className={style.facebook}
            >
              <FacebookIcon fontSize="medium" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/ottonova" target="_blank">
              <YouTubeIcon fontSize="medium" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ottonovahealth/" target="_blank">
              <InstagramIcon fontSize="medium" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/ottonova-ag/"
              target="_blank"
            >
              <LinkedIn fontSize="medium" />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default TheFooter;
