export const preventNumber = (e) => {
  if (e.target.id === "username") {
    return;
  }
  const keyCode = e.keyCode ? e.keyCode : e.which;
  if ((keyCode > 47 && keyCode < 58) || (keyCode > 95 && keyCode < 107)) {
    e.preventDefault();
  }
};

export const validationInput = (target, validationErrors, value) => {
  validationErrors[target.id] = !value;
};
