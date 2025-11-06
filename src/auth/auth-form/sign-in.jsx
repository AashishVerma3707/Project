import { Button, TextField } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FormProvider, useForm } from "react-hook-form";
import { useOutletContext } from "react-router-dom";
import { Column } from "../../shared-component/shared-styled-component";
import theme from "../../theme";
import { auth } from "../firebase";
import { getReadableError } from "../../const/auth.cons";

const SignInForm = () => {
  const formMethodOnChange = useForm({ mode: "onChange" });
  const { handleAuthentication, setErrorMessage } = useOutletContext();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = formMethodOnChange;

  const onSubmit = (data) => {
    const { email, password } = data;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        handleAuthentication(user);
      })
      .catch((error) => {
        setErrorMessage(getReadableError(error.code));
      });
  };

  return (
    <FormProvider>
      Sign-in
      <Column rowGap={theme.customSpacing[300]} alignItems="flex-end">
        <TextField
          variant="outlined"
          label="Email"
          type="email"
          error={!!errors.email}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: "/^S+@S+.S+$/",
              message: "Email is not valid",
            },
            minLength: {
              value: 5,
              message: "email must be of min 5 character",
            },
          })}
        />
        <TextField
          variant="outlined"
          label="Password"
          name="password"
          error={!!errors.password}
          {...register("password", {
            required: "password is required",
          })}
        />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </Button>
      </Column>
    </FormProvider>
  );
};
export default SignInForm;
