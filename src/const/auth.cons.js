export const getReadableError = (code) => {
  switch (code) {
    case "auth/invalid-email":
      return "The email address is not valid.";

    case "auth/user-disabled":
      return "This account has been disabled.";

    case "auth/user-not-found":
      return "No account found with this email.";

    case "auth/wrong-password":
      return "Incorrect password. Please try again.";

    case "auth/invalid-credential":
      return "Invalid email or password. Please check your credentials.";

    case "auth/too-many-requests":
      return "Too many attempts. Please try again later.";

    case "auth/missing-password":
      return "Please enter your password.";

    case "auth/missing-email":
      return "Please enter your email address.";

    case "auth/invalid-login-credentials":
      return "Invalid login details. Please check and try again.";

    case "auth/network-request-failed":
      return "Network error. Please check your internet connection.";

    case "auth/popup-closed-by-user":
      return "Sign-in was canceled. Please try again.";

    case "auth/operation-not-allowed":
      return "This sign-in method is not enabled for this app.";

    default:
      return "Something went wrong. Please try again.";
  }
};

export const AuthState = {
  loading: "loading",
  authenticated : "authenticated",
  unauthenticated:  "unauthenticated"
}