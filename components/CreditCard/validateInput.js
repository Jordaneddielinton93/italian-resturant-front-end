function inputName_number_IsNotANumber(name, value) {
  if (name == "number" && value.length >= 17) return true;
  if (name == "number" && value.length == 0) return false;
  // "is a valid number"
  if (name == "number" && value.match(/^[0-9]+$/) == null) {
    // "is a not a number");
    return true;
  }
  console.log(value);
}

function inputName_name_IsNotalphabetical(name, value) {
  if (name == "name" && value.length == 0) return false;
  if (name == "name" && value.length > 25) return true;
  if (name == "name" && !/^[A-Za-z\s]*$/.test(value)) {
    console.log("is a bad number ??");
    return true;
  }
}

function inputName_expiry_IsNotANumber(name, value) {
  const date = new Date();
  const year = `${date.getFullYear()}`.slice(-2);
  const month =
    `${date.getMonth() + 1}`.length == 1
      ? "0" + `${date.getMonth() + 1}`
      : `${date.getMonth() + 1}`;

  if (name == "expiry" && value.length == 0) return false; // if empty string allow it.
  if (name == "expiry" && value.length > 4) return true; // max 4 Char's
  if (name == "expiry" && value.match(/^[0-9]+$/) == null) return true; // only numbers
}

function inputName_cvc_IsNotANumber(name, value) {
  if (name == "cvc" && value.length == 0) return false; // if empty string allow it.
  if (name == "cvc" && value.match(/^[0-9]+$/) == null) return true; // only numbers
  if (name == "cvc" && value.length > 3) return true; // max 3 Char's
}

export function isNotValidedInput(name, value) {
  if (inputName_number_IsNotANumber(name, value)) return true; //and break
  if (inputName_name_IsNotalphabetical(name, value)) return true; //and break
  if (inputName_expiry_IsNotANumber(name, value)) return true; //and break
  if (inputName_cvc_IsNotANumber(name, value)) return true; //and break
  return;
}
