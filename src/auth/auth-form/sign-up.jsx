import { Button, TextField } from "@mui/material";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FormProvider, useForm } from "react-hook-form";
import { useOutletContext } from "react-router-dom";
import { Column } from "../../shared-component/shared-styled-component";
import theme from "../../theme";
import { auth } from "../firebase";
import { getReadableError } from "../../const/auth.cons";

const SignUpForm = () => {
  const formMethodOnChange = useForm({ mode: "onChange" });
  const { handleAuthentication, setErrorMessage } = useOutletContext();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = formMethodOnChange;

  const onSubmit = (data) => {
    const { email, password, displayName } = data;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName,
          //   photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
            handleAuthentication(user);
          })
          .catch((error) => {
            setErrorMessage(getReadableError(error.code));
          });
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  };
  return (
    <FormProvider>
      Sign-Up
      <Column rowGap={theme.customSpacing[300]} alignItems="flex-end">
        <TextField
          variant="outlined"
          label="Name"
          error={!!errors.displayName}
          {...register("displayName", {
            required: "Name is Required",
          })}
        />
        <TextField
          variant="outlined"
          label="Email"
          type="email"
          error={!!errors.email}
          helperText={<>{errors?.email?.message}</>}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
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
          type="password"
          error={!!errors.password}
          {...register("password", {
            required: "password is required",
            //  TODO:  validation is required
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
export default SignUpForm;
