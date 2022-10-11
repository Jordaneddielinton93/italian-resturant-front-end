import React, { useState } from "react";
import Cards from "credit-card-preview";
import "credit-card-preview/dist/styles-compiled.css";
import { FormControl, FormHelperText, Flex, Button } from "@chakra-ui/react";
import FormInputHandler from "../FormInputHandler/FormInputHandler";
import { isNotValidedInput } from "./validateInput";
type Props = {};

export default function CreditCard({}: Props) {
  let [state, setState] = useState<any>({
    cvc: { value: "", hasErr: false },
    expiry: { value: "", hasErr: false },
    focus: "",
    name: { value: "", hasErr: false },
    number: { value: "", hasErr: false },
  });

  let handleInputFocus = (e: any) => {
    setState({ ...state, focus: e.target.name });
  };
  let handleClickErrRemove = (name: string) => {
    state[name].hasErr = false;
    setState({ ...state });
  };

  let handleInputChange = (e: any) => {
    let { name, value } = e.target;
    if (isNotValidedInput(name, value)) {
      state[name].hasErr = true;
      setState({ ...state });
      return;
    }
    state[name].value = value;
    state[name].hasErr = false;
    setState({ ...state });

    // if the input is not correct do nothing else set input
  };
  console.log(state);
  return (
    <Flex flexDir={"column"} m="30px auto">
      <Cards
        cvc={state.cvc.value}
        expiry={state.expiry.value}
        focused={state.focus}
        name={state.name.value}
        number={state.number.value}
      />
      <FormControl>
        <FormInputHandler
          errMessage="Only digits, Max amount is 17"
          label="Number"
          type="tel"
          name="number"
          placerholder="Card Number"
          value={state.number.value}
          errorBorder={state.number.hasErr}
          onChange={handleInputChange}
          handleClick={() => handleClickErrRemove("number")}
          onFocus={handleInputFocus}
        />
        <FormInputHandler
          errMessage="Only Letters & spaces, Max amount is 25"
          label="Full Name"
          type="text"
          name="name"
          placerholder="name"
          value={state.name.value}
          errorBorder={state.name.hasErr}
          onChange={handleInputChange}
          handleClick={() => handleClickErrRemove("name")}
          onFocus={handleInputFocus}
        />
        <FormInputHandler
          errMessage="Only digits, Max amount is 4"
          label="expiry"
          type="text"
          name="expiry"
          placerholder="expiry date: mm/yy"
          value={state.expiry.value}
          errorBorder={state.expiry.hasErr}
          onChange={handleInputChange}
          handleClick={() => handleClickErrRemove("expiry")}
          onFocus={handleInputFocus}
        />
        <FormInputHandler
          errMessage="Only digits, Max amount is 3"
          label="cvc"
          type="text"
          name="cvc"
          errorBorder={state.cvc.hasErr}
          placerholder="cvc"
          value={state.cvc.value}
          onChange={handleInputChange}
          handleClick={() => handleClickErrRemove("cvc")}
          onFocus={handleInputFocus}
        />
        <FormHelperText>We'll never share your details.</FormHelperText>
      </FormControl>
      <Button
        display={
          !state.number.hasErr &&
          !state.name.hasErr &&
          !state.expiry.hasErr &&
          !state.cvc.hasErr
            ? "block"
            : "none"
        }
      >
        Submit Purchase
      </Button>
    </Flex>
  );
}
