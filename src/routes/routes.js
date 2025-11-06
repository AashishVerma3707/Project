const getRoute = ({ parent, path }) => `${parent}/${path}`;

export const AppRoute = {
  auth: "/auth",
  home: "/",
};
export const authRoute = {
  signIn: getRoute({
    parent: AppRoute.auth,
    path: "sign-in",
  }),
  signUp: getRoute({
    parent: AppRoute.auth,
    path: "sign-up",
  }),
};
