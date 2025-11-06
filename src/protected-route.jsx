import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "./auth/firebase";
import { AppRoute } from "./routes/routes";
import { AppPage } from "./shared-component/shared-styled-component";
import zustandStore from "./store/store";
import theme from "./theme";
import { AuthState } from "./const/auth.cons";

const ProtectedApp = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(AuthState.loading);
  const setUser = zustandStore((state) => state.setUser);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(AuthState.authenticated);
        setUser(user);
      } else {
        setIsAuthenticated(AuthState.unauthenticated);
      }
    });
  }, [setUser]);

  if (isAuthenticated === AuthState.loading) {
    return <div>Loading...</div>;
  }
  if (isAuthenticated === AuthState.unauthenticated) {
    return <Navigate to={AppRoute.auth} />;
  }
  return (
    <AppPage alignItems="center" rowGap={theme.customSpacing[500]}>
      <Outlet />
    </AppPage>
  );
};
export default ProtectedApp;
