import React, { useState , useMemo, useEffect } from "react";
import MOCK_DATA from "../rest-time/MOCK_DATA.json";
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  TextField,
  Fade,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";

// styles
import useStyles from "./styles";

// logo
import logo from "../images/illustration_dashboard.png";

// context
import { useUserDispatch, loginUser } from "../../context/UserContext";

function Login(props,history) {
  var classes = useStyles();
  // global
  var userDispatch = useUserDispatch();

  // local
  var [isLoading, setIsLoading] = useState(false);
  var [error, setError] = useState(null);
  var [loginValue, setLoginValue] = useState([]);
  var [passwordValue, setPasswordValue] = useState([]);
 

  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer}>
        <img src={logo} />
      </div>
      <div className={classes.formContainer}>
        <div className={classes.form}>
          <Fade in={error}>
            <Typography color="secondary" className={classes.errorMessage}>
              ظاهرا مشکلی پیش آمده :(
            </Typography>
          </Fade>
          <TextField
            id="username"
            InputProps={{
              classes: {
                underline: classes.textFieldUnderline,
                input: classes.textField,
              },
            }}
            value={loginValue}
            onChange={(e) => setLoginValue(e.target.value)}
            margin="normal"
            placeholder="username"
            type="text"
            fullWidth
          />

          <TextField
            id="password"
            InputProps={{
              classes: {
                underline: classes.textFieldUnderline,
                input: classes.textField,
              },
            }}
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            margin="normal"
            placeholder="password"
            type="password"
            fullWidth
          />
          <div className={classes.formButtons}>
            {isLoading ? (
              <CircularProgress size={26} className={classes.loginLoader} />
            ) : (
             
              <Button
                disabled={loginValue.length === 0 || passwordValue.length === 0}
                onClick={() =>
                  
                  loginUser(                  
                    userDispatch,
                    loginValue,
                    passwordValue,
                    props.history,
                    setIsLoading(true),
                    setError,
                  )
                }
                variant="contained"
                color="primary"
                size="large"
                style={{ fontSize: "18px" }}
              >
                {isLoading? <CircularProgress/>:
                  <Typography>
                  Login
                  </Typography>
                }
              </Button>
            )}
          </div>
        </div>
        <Typography color="primary" className={classes.copyright}>
        ©2024  All rights reserved.{" "}
          <a style={{ textDecoration: "none", color: "inherit" }}></a> 
        </Typography>
      </div>
    </Grid>
  );
}

export default withRouter(Login);
