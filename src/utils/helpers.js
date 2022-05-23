const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const preventNumber = (e) => {
  if (e.target.id === "username") {
    return;
  }
  const keyCode = e.keyCode ? e.keyCode : e.which;
  if ((keyCode > 47 && keyCode < 58) || (keyCode > 95 && keyCode < 107)) {
    e.preventDefault();
  }
};

export const validationInput = (personalInformation) => {
  Object.keys(personalInformation).map((k) => {
    personalInformation[k].valid = !!personalInformation[k].value;
  });
};

export const validateEmail = (value) => {
  return !String(value).toLowerCase().match(EMAIL_REGEX);
};
