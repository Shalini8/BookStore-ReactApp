import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import { InputAdornment } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import "./Signin.css";

export default function Signin() {
const validEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");
const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");
const validName = new RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
const validMobile = new RegExp('^[0-9]{10}$'); 

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
    if (fName === "" || !validName.test(fName)) {
        setfNameError(false);
      } else {
        setfNameError(true);
      }
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
      if (mobile === "" || !validMobile.test(mobile)) {
        setmobileError(false);
      } else {
        setmobileError(true);
      }


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
          helperText={!fNameError ? "Invalid name" : ""}
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
          helperText={!emailError ? "Invalid Email" : ""}
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
          helperText={!passwordError ? "password is Invalid" : ""}
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
          helperText={!mobileError ? "Enter correct phoneNo" : ""}
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
