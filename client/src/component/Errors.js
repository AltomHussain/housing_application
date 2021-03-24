export const sendErrors = (
  firstName,
  surname,
  email,
  confirmEmail,
  password,
  city,
  phoneNumber,
  setFirstNameError,
  setSurnameError,
  setEmailError,
  setConfirmError,
  setcityError,
  setPhoneError,
  setPasswordError,
  setInput,
  setIsValid
) => {
  const fill = "Please fill the field";
  if (firstName === "") {
      setIsValid(false);
    return setFirstNameError(fill);
  } else {
      setIsValid(true);
    setFirstNameError("");
  }

  if (surname === "") {
    setIsValid(false)
    return setSurnameError(fill)
  } else {
    setIsValid(true)
    setSurnameError("");
  }

  if (email === "") {
      setIsValid(false);
    return setEmailError(fill);
  } else {
      setIsValid(true);
    setEmailError("");
  }
  if (confirmEmail === "") {
      setIsValid(false);
    return setConfirmError(fill);
  } else {
      setIsValid(true);
    setConfirmError("");
  }
  if (password === "") {
      setIsValid(false);
    return setPasswordError(fill);
  } else if (password.length < 3) {
      setIsValid(false);
    return setPasswordError("password must be 5 characters at least");
  } else {
      setIsValid(true);
    setPasswordError("");
  }

  if (city === "") {
      setIsValid(false);
    return setcityError(fill);
  } else {
      setIsValid(true);
    setcityError("");
  }
  if (phoneNumber === "") {
      setIsValid(false);
    return setPhoneError(fill);
  } else {
      setIsValid(true);
    setPhoneError("");
  }
 return setInput({
    firstName: "",
    surname: "",
    email: "",
    confirmEmail: "",
    password: "",
    city: "",
    phoneNumber: "",
  });

};