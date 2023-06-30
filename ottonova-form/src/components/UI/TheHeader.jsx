import LogoOttonova from "../../assets/logo_ottonova.png";
import style from "./TheHeader.module.css";

function TheHeader() {
  return (
    <>
      <div>
        <a href="https://www.ottonova.de" target="_blank">
          <img src={LogoOttonova} className={style.logo} alt="ottonova-logo" />
        </a>
      </div>
    </>
  );
}

export default TheHeader;
