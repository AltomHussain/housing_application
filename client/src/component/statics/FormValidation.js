import * as yup from "yup";
export const formValidation = () => {
  let schema = yup.object().shape({
    firstName: yup.string().required("First name is required!"),
    surname: yup.string().required("Surname is required!"),
    email: yup
      .string()
      .required("Email is required !")
      .email("Email is invalid"),
    confirmEmail: yup
      .string()
      .oneOf([yup.ref("email"), null], "email must match")
      .required("Field is required please fill it !"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    city: yup.string().required("City is required!"),
    phoneNumber: yup.number().required().positive(),
  });
  return schema;
};

