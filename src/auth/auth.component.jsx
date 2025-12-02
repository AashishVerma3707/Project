import { Typography } from "@mui/material";
import { useState } from "react";
import { Outlet, useMatch, useNavigate } from "react-router-dom";
import { AppRoute, authRoute } from "../routes/routes";
import { AppPage } from "../shared-component/shared-styled-component";
import theme from "../theme";

const AuthForm = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const isSignIn = useMatch(authRoute.signIn);
  let navigate = useNavigate();

  const handleAuthentication = (user) => {
    navigate(AppRoute.home);
  };

  return (
    <AppPage alignItems="center" rowGap={theme.customSpacing[500]}>
      <Outlet context={{ handleAuthentication, setErrorMessage }} />
      <Typography varriant="h4" color={theme.palette.orange[500]}>
        {errorMessage}
      </Typography>
      {isSignIn ? (
        <Typography varriant="h3">
          Please{" "}
          <a style={{ color: theme.palette.grey.main }} href={authRoute.signUp}>
            Sign-Up
          </a>{" "}
          if you're new to this cool app
        </Typography>
      ) : (
        <Typography varriant="h3">
          {" "}
          Please{" "}
          <a style={{ color: theme.palette.grey.main }} href={authRoute.signIn}>
            Sign-In
          </a>{" "}
          if you are already a user
        </Typography>
      )}
    </AppPage>
  );
};
export default AuthForm;
