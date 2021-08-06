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

  const handleClickShowPassword = () => {
    (showPassword) ? setShowPassword(false): setShowPassword(true);
   };

  return (
    <div>
      <div className="signTextfield">
        <TextField
          label="Full Name"
          variant="outlined"
          size="small"
          fullWidth
        />
      </div>
      <div className="signTextfield">
        <TextField label="Email id" variant="outlined" size="small" fullWidth />
      </div>
      <div className="signTextfield">
        <TextField
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
          label="Mobile Number"
          variant="outlined"
          fullWidth
          size="small"
        />
      </div>
      <Button
        fullWidth
        style={{ backgroundColor: "#802F34", color: "#ffffff" }}
      >
        Signup
      </Button>
    </div>
  );
}
