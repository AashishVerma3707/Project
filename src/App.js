import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignInForm from "./auth/auth-form/sign-in";
import SignUpForm from "./auth/auth-form/sign-up";
import WeatherMain from "./component/weather-main.component";
import ProtectedApp from "./protected-route";
import AuthForm from "./auth/auth.component";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth" element={<AuthForm />}>
          <Route index element={<Navigate to="sign-in" replace />} />
          <Route path="sign-in" element={<SignInForm />} />
          <Route path="sign-up" element={<SignUpForm />} />
        </Route>
        <Route path="/" element={<ProtectedApp />}>
          <Route index={true} element={<WeatherMain />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
