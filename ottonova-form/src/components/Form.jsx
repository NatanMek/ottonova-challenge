import { Grid, TextField, Alert } from "@mui/material";
import style from "./Form.module.css";
import LogoOttonovaWhite from "../assets/logo_ottonova_white.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import ManOutlinedIcon from "@mui/icons-material/ManOutlined";
import WomanOutlinedIcon from "@mui/icons-material/WomanOutlined";
import LoadingButton from "@mui/lab/LoadingButton";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#0083ea",
    },
  },
});

function Form() {
  const [gender, setGender] = useState("male");
  const [errorInput, setErrorInput] = useState(false);
  const [errorText, setErrorText] = useState(false);
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [enteredPhone, setEnteredPhone] = useState("");

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleNameInput = (event) => {
    setErrorInput(false);
    setErrorText(false);
    setEnteredName(event.target.value);
  };

  const handleEmailInput = (event) => {
    setErrorInput(false);
    setErrorText(false);
    setEnteredEmail(event.target.value);
  };

  const submitData = (event) => {
    event.preventDefault();

    if (enteredName.trim().length === 0) {
      setErrorInput(true);
      setErrorText("Bitte geben Sie einen gültigen Namen ein");
      return;
    }
    if (!isValidEmail(enteredEmail) || enteredEmail.length === 0) {
      setErrorInput(true);
      setErrorText("Bitte geben Sie einen gültige E-Mail-Adresse ein");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccessAlert(true);
    }, 3000);
  };

  const handleGender = (event, newGender) => {
    setGender(newGender);
  };

  const handlePhoneInput = (value, country) => {
    console.log(value);
    console.log(country);
    if (value.match(/12345/)) {
      setIsValidPhone(false);
      return "Invalid value: " + value + ", " + country.name;
    } else if (value.match(/1234/)) {
      setIsValidPhone(false);
      return false;
    } else {
      setEnteredPhone(value);
      return true;
    }
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.logoContainer}>
          <span className={`${style.logoContainer} ${style.child1}`}></span>
          <span className={`${style.logoContainer} ${style.child2}`}></span>
          <span className={`${style.logoContainer} ${style.child3}`}></span>
          <div className={style.logoBox}>
            <img src={LogoOttonovaWhite} className={style.logoImg} alt="" />
          </div>
        </div>
        <h1 className={style.title}>Anmelden</h1>

        <Grid container spacing={4}>
          <Grid item md={12}>
            <TextField
              error={errorInput}
              fullWidth
              label="Name"
              required
              id="fullName"
              size="small"
              className={style.input}
              helperText={
                errorText ? "Bitte geben Sie einen gültigen Namen ein" : false
              }
              onChange={(event) => {
                handleNameInput(event);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              error={errorInput}
              fullWidth
              label="E-Mail"
              required
              id="fullName"
              size="small"
              helperText={
                errorText
                  ? "Bitte geben Sie einen gültige E-Mail-Adresse ein"
                  : false
              }
              onChange={(event) => {
                handleEmailInput(event);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <PhoneInput
              onChange={handlePhoneInput}
              inputClass={style.phone}
              country={"de"}
              inputStyle={!isValidPhone ? { borderColor: "red" } : null}
            />
          </Grid>
          <Grid item xs={12}>
            <ToggleButtonGroup
              value={gender}
              exclusive
              onChange={handleGender}
              style={{ marginLeft: "85px" }}
            >
              <ToggleButton
                value="male"
                style={
                  gender === "male" ? { backgroundColor: "#0083ea" } : null
                }
              >
                <ManOutlinedIcon
                  fontSize="large"
                  style={
                    gender === "male" ? { fill: "white" } : { fill: "grey" }
                  }
                />
              </ToggleButton>
              <ToggleButton
                value="female"
                style={
                  gender === "female" ? { backgroundColor: "#0083ea" } : null
                }
              >
                <WomanOutlinedIcon
                  fontSize="large"
                  style={
                    gender === "female" ? { fill: "white" } : { fill: "grey" }
                  }
                />
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
        </Grid>
        <div className={style.actions}>
          <ThemeProvider theme={theme}>
            <LoadingButton
              type="submit"
              onClick={submitData}
              variant="contained"
              endIcon={<FingerprintIcon />}
              size="large"
              color="secondary"
              className={style.button}
              loading={isLoading}
              //loadingPosition="start"
              style={
                isLoading
                  ? {
                      color: "white",
                    }
                  : null
              }
            >
              <span>Anmelden</span>
            </LoadingButton>
          </ThemeProvider>
        </div>
        {successAlert && (
          <Alert onClose={() => setSuccessAlert(false)}>
            Erfolgreich angemeldet!
          </Alert>
        )}
      </div>
    </>
  );
}
export default Form;
