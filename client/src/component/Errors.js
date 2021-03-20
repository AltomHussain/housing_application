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
  setInput
) => {
  const fill = "Please fill the field";
  if (firstName === "") {
    return setFirstNameError(fill);
  } else {
    setFirstNameError("");
  }

  if (surname === "") {
    return setSurnameError(fill);
  } else {
    setSurnameError("");
  }

  if (email === "") {
    return setEmailError(fill);
  } else {
    setEmailError("");
  }
  if (confirmEmail === "") {
    return setConfirmError(fill);
  } else {
    setConfirmError("");
  }
if(password===""){
  return setPasswordError(fill)
}else if(password.length <3){
  return setPasswordError("password not log enough")
}
else{
  setPasswordError("")
}

  if (city === "") {
    return setcityError(fill);
  } else {
    setcityError("");
  }
  if (phoneNumber === "") {
    return setPhoneError(fill);
  } else {
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