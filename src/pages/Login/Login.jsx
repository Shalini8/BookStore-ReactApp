import React from "react";
import "./Login.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import { InputAdornment } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

export default function Login() {
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
    let isError = false;
     email === "" ? setEmailError(false) : setEmailError(true);
    password === "" ? setPasswordError(false) : setPasswordError(true);

      isError = emailError || passwordError;
    return (isError);
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
          helperText={!emailError ? "Enter email" : " "}
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
          helperText={!passwordError ? "Enter your password" : ""}
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
