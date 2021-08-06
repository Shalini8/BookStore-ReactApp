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

  const handleClickShowPassword = () => {
     (showPassword) ? setShowPassword(false): setShowPassword(true);
    };
    
  return (
    <div>
      <div className="textfield">
        <TextField label="Email ID" variant="outlined" size="small" fullWidth />
      </div>
      <div className="textfield">
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
      <Button
        fullWidth
        className="login-btn"
        style={{ backgroundColor: "#802F34", color: "#ffffff" }}
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
