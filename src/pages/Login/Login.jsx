import React from "react";
import "./Login.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import { InputAdornment } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

export default function Login() {
  const validEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");
  const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

  const [showPassword, setShowPassword] = React.useState("false");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState("false");
  const [passwordError, setPasswordError] = React.useState("false");

  const handleClickShowPassword = () => {
    showPassword ? setShowPassword(false) : setShowPassword(true);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const validation = () => {
    console.log("here");
    let isError = false;
    if (email === "" || !validEmail.test(email)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
    if (password === "" || !validPassword.test(password)) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
    isError = emailError || passwordError;
    return isError;
  };
  
  const handleLogin = (e) => {
    e.preventDefault();
    validation();
  };

  return (
    <div>
      <div className="textfield">
        <TextField
          name="email"
          error={!emailError}
          helperText={!emailError ? "Invalid email" : " "}
          onChange={handleEmail}
          label="Email ID"
          variant="outlined"
          size="small"
          fullWidth
        />
      </div>
      <div className="textfield">
        <TextField
          name="password"
          error={!passwordError}
          helperText={!passwordError ? "Invalid Password !" : ""}
          onChange={handlePassword}
          label="Password"
          variant="outlined"
          size="small"
          fullWidth
          type={showPassword ? "password" : "text"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <Button
        fullWidth
        className="login-btn"
        style={{ backgroundColor: "#802F34", color: "#ffffff" }}
        onClick={handleLogin}
      >
        Login
      </Button>
      <h4 className="or">OR</h4>
      <div className="fgButtons">
        <Button
          className="fb-btn"
          style={{
            backgroundColor: "#4266B2",
            color: "#ffffff",
            textTransform: "capitalize",
            padding: "10px 30px",
          }}
        >
          Facebook
        </Button>
        <Button
          style={{
            backgroundColor: "#E4E4E4",
            color: "#000000",
            textTransform: "capitalize",
            width: "50%",
          }}
        >
          Google
        </Button>
      </div>
    </div>
  );
}
