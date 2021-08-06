import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import { InputAdornment } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import "./Signin.css";

export default function Signin() {
  const [showPassword, setShowPassword] = React.useState("false");
  const [fName, setfName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [mobile, setMobile] = React.useState("");

  const [fNameError, setfNameError] = React.useState("false");
  const [emailError, setEmailError] = React.useState("false");
  const [passwordError, setPasswordError] = React.useState("false");
  const [mobileError, setmobileError] = React.useState("false");

  const handleClickShowPassword = () => {
    showPassword ? setShowPassword(false) : setShowPassword(true);
  };
  const handlefName = (e) => {
    setfName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleMobile = (e) => {
    setMobile(e.target.value);
  };

  const validation = () => {
    let isError = false;
    fNameError === "" ? setfNameError(true) : setfNameError(false);
    email === "" ? setEmailError(false) : setEmailError(true);
    password === "" ? setPasswordError(false) : setPasswordError(true);
    mobile === "" ? setmobileError(false) : setmobileError(true);

    isError = fNameError || emailError || passwordError || mobileError;
    return isError;
  };
  const handleSignup = (e) => {
    e.preventDefault();
    validation();
  };

  return (
    <div>
      <div className="signTextfield">
        <TextField
          name="fName"
          error={!fNameError}
          helperText={!fNameError ? "Enter your name" : ""}
          label="Full Name"
          variant="outlined"
          size="small"
          fullWidth
          onChange={handlefName}
        />
      </div>
      <div className="signTextfield">
        <TextField
          name="email"
          error={!emailError}
          helperText={!emailError ? "Enter your email" : ""}
          onChange={handleEmail}
          label="Email id"
          variant="outlined"
          size="small"
          fullWidth
        />
      </div>
      <div className="signTextfield">
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
      <div className="signTextfield">
        <TextField
          name="mobile"
          error={!mobileError}
          helperText={!mobileError ? "Enter your phoneNo" : ""}
          label="Mobile Number"
          variant="outlined"
          fullWidth
          size="small"
          onChange={handleMobile}
        />
      </div>
      <Button
        fullWidth
        style={{ backgroundColor: "#802F34", color: "#ffffff" }}
        onClick={handleSignup}
      >
        Signup
      </Button>
    </div>
  );
}
