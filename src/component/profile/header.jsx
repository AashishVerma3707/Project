import { Button, Typography } from "@mui/material";
import {
  Row,
  withBackground,
} from "../../shared-component/shared-styled-component";
import zustandStore from "../../store/store";
import theme from "../../theme";
import { signOut } from "firebase/auth";
import { auth } from "../../auth/firebase";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "../../routes/routes";

const ProfileHeader = () => {
  const user = zustandStore((state) => state.user);
  const UserHeader = withBackground(Row);
  let navigate = useNavigate();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        alert("You're signed out");
        navigate(AppRoute.home);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <UserHeader
      justifyContent="flex-end"
      fullWidth
      columnGap={theme.customSpacing[200]}
      sx={{ padding: theme.customSpacing[200] }}
    >
      <Typography variant="h5">{user.displayName || "sample name"}</Typography>
      <Button variant="contained" onClick={handleSignout}>
        Logout
      </Button>
    </UserHeader>
  );
};
export default ProfileHeader;
